import { MongoClient, ServerApiVersion } from 'mongodb';

const url = process.env.NODE_ENV === 'production' ? `mongodb+srv://mongouser:${process.env.MONGO_PASSWORD}@cluster0.dejan4e.mongodb.net/?retryWrites=true&w=majority` : "mongodb://localhost:27017";
const client = new MongoClient(url, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

await client.connect();

const dbName = "universal_elements";
const db = await client.db(dbName);

export default {
    elements: db.collection("elements"),
}