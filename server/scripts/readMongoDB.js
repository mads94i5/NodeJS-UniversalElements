import mongoDB from './mongodb.js';

const allElements = await mongoDB.elements.find().toArray();

allElements.forEach((element) => console.log(element))
