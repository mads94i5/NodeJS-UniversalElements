import mongoDB from './mongodb.js';

const response = await mongoDB.elements.deleteMany();

console.log(response);
