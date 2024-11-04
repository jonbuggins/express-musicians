// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest");
const { db } = require('./db/connection');
const { Musician } = require('./models/index');
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test("Testing bakedGoods endpoint", async () => {
        // Sends request to "/musicians" endpoint
        // You can send a request using the .get() method
        const response = await request(app).get("/musicians");

        //A HTTP status code of 200 indicates a successful GET request was made. We can access a status code using the response.statusCode method.
        expect(response.statusCode).toBe(200);

        const responseData = JSON.parse(response.text);
        // Write tests here...  
        // expect().toBe();

    })
    




    
})
