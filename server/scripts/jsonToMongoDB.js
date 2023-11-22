import mongoDB from "./mongodb.js";
import fs from 'fs';

const readJsonFile = async () => {
    try {
        const jsonData = await fs.promises.readFile("../periodic-table.json", "utf-8");
        const jsonParsed = JSON.parse(jsonData);
        const jsonArray = jsonParsed.elements;

        console.log(`Number of valid documents to insert: ${jsonArray.length}`);

        if (jsonArray.length > 0) {
            const response = await mongoDB.elements.insertMany(jsonArray);
            console.log(response);
        } else {
            console.log("No valid documents to insert.");
        }
    } catch (error) {
        console.error('Error reading or processing JSON file:', error);
    }
};

readJsonFile();