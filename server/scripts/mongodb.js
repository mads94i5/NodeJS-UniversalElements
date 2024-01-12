import { MongoClient } from 'mongodb';

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
await client.connect();

const dbName = "universal_elements";
const db = await client.db(dbName);

export default {
    elements: db.collection("elements"),
}
