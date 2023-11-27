import mysql from "mysql2";

export const mysqlDB = mysql.createConnection({
    host: process.env.NODE_ENV === 'production' ? process.env.DB_HOST : process.env.LOCAL_DB_HOST,
    port: process.env.NODE_ENV === 'production' ? process.env.DB_PORT : process.env.LOCAL_DB_PORT,
    user: process.env.NODE_ENV === 'production' ? process.env.DB_USER : process.env.LOCAL_DB_USER,
    password: process.env.NODE_ENV === 'production' ? process.env.DB_PASS : process.env.LOCAL_DB_PASS,
    database: process.env.NODE_ENV === 'production' ? process.env.DB_NAME : process.env.LOCAL_DB_NAME,
});
/*
const keepConnectionAlive = () => {
    mysqlDB.query("SELECT 1", (err) => {
        if (err) {
            console.error("Error keeping the connection alive:", err);
        }
    });
};

const keepAliveInterval = setInterval(keepConnectionAlive, 5 * 60 * 1000);
*/

export function endDatabaseConnection() {
    //clearInterval(keepAliveInterval);
    mysqlDB.end((err) => {
        if (err) {
            console.error("Error while closing the database connection:", err);
        } else {
            console.log("Database connection closed.");
        }
    });
}