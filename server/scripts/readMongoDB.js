import mongoDB from './mongodb.js';

const allElements = await mongoDB.elements.find().toArray();

console.log(allElements);
