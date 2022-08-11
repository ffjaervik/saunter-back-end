import app from '../app.js'
import request from 'supertest'
import {test, expect, describe} from '@jest/globals'
import {pool} from '../db/index'


// beforeAll/afterAll currently not closing the test after it's complete.


describe("GET low-budget", function() {
    test("Get request (status code: 200) and check that header is json", async function(){
        const response = await request(app).get("/low-budget");
        expect(response.statusCode).toEqual(200);
        expect(response.headers["content-type"]).toMatch(/json/);
    })

    test("GET request responds with correct body structure", async function(){
        const response = await request(app).get("/low-budget");
        const actual = response.body;
        const expected = {
            success: true,
            payload: expect.arrayContaining([
                {
                    id: expect.any(Number),
                    name: expect.any(String),
                    type: expect.any(String),
                    description: expect.any(String),
                    budget: expect.any(Number),
                    energy_level: expect.any(Number),
                    dog_friendly: expect.any(Boolean),
                    saved: expect.any(Boolean),
                    image: expect.any(String)
        
                }
            ])
        };

        expect(actual).toBe(expected);
    })

//     test("GET request with specific ID and correct body structure", async function(){
//         const response = await request(app).get("/v1/mindactivity/4");
//         const actual = response.body;
//         const expected = {
//             success: true,
//             payload: [{
//                 id: 4,
//                 content: expect.any(String)
//             }]
//         };
//         expect(actual).toEqual(expected);
//     })
// })

//   afterAll(async () => {
//     await pool.end() 
});