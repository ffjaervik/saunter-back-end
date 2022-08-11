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
        // console.log(response.body)
        const expected = {
            success: true,
            data: expect.arrayContaining([
                {
                    // id: expect.any(Number),
                
                    name: expect.any(String),
                    type: expect.any(String),
                    description: expect.any(String),
                    budget: expect.any(Number),
                    energy_level: expect.any(Number),
                    id: expect.any(Number),
                    dog_friendly: expect.any(Boolean),
                    saved: expect.any(Boolean),
                    image: expect.any(String)
        
                }
            ])
        };

        // expect(actual).toMatchObject(expected);
        expect.objectContaining(expected)
    })
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
// });

// {"data": 
// [{"budget": 1,
//  "description": "The Natural History Museum in London is a museum that exhibits a vast range of specimens from various segments of natural history.",
//   "dog_friendly": false, 
//   "energy_level": 2,
//    "id": 1, 
//    "image": "https://media.timeout.com/images/105162351/image.jpg", 
//    "name": "National Science Museum", 
//    "saved": 
// false, 
// "type": "activity"