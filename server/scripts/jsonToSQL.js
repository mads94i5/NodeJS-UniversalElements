import fs from 'fs/promises';

const jsonFilepath = '../periodic-table.json';
const mainTableName = 'elements';

const camelCaseToSnakeCase = (str) => {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

const generateInsertStatement = (tableName, columns, values) => {
    return `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES (${values.join(', ')});`;
};

const generateArrayInsertStatements = (mainTableId, arrayName, arrayValues) => {
    const tableName = `${camelCaseToSnakeCase(arrayName)}s`;
    const columns = [`${mainTableName}_id`, `${camelCaseToSnakeCase(arrayName)}`];
    const values = arrayValues.map((value) => `(${mainTableId}, '${value}')`);
    return generateInsertStatement(tableName, columns, values);
};

const generateInsertStatements = (json) => {
    const mainTableColumns = Object.keys(json.elements[0]).map(camelCaseToSnakeCase);
    const insertStatements = [];

    json.elements.forEach((element) => {
        const mainTableValues = Object.values(element).map((value) => {
            if (Array.isArray(value)) {
                return null;
            } else if (typeof value === 'string') {
                return `'${value}'`;
            } else if (value === null) {
                return 'NULL';
            } else {
                return value;
            }
        });

        const mainTableInsertStatement = generateInsertStatement(mainTableName, mainTableColumns, mainTableValues);
        insertStatements.push(mainTableInsertStatement);

        Object.entries(element).forEach(([columnName, arrayValue]) => {
            if (Array.isArray(arrayValue) && arrayValue.length > 0) {
                const arrayInsertStatement = generateArrayInsertStatements(element.id, columnName, arrayValue);
                insertStatements.push(arrayInsertStatement);
            }
        });
    });

    return insertStatements.join('\n');
};

const readJsonFile = async () => {
    try {
        const jsonData = await fs.readFile(jsonFilepath, 'utf-8');
        const elementsJson = JSON.parse(jsonData);

        const insertStatements = generateInsertStatements(elementsJson);

        fs.writeFile('insert.sql', insertStatements);

        console.log('Insert statements saved to insert.sql');
    } catch (error) {
        console.error('Error reading or processing JSON file:', error);
    }
};

readJsonFile();