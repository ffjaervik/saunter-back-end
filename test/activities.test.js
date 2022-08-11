import app from '../app.js'
import request from 'supertest'
import {test, expect, describe} from '@jest/globals'
import {pool} from '../db/index'



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
        expect.objectContaining(expected)
    })
})


describe("GET /medium-budget", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/medium-budget")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

});

describe("GET /high-budget", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/high-budget")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /all-budgets", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/all-budgets")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /all-budgets", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/all-budgets")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /low-energy", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/low-energy")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /medium--energy", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/medium-energy")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /high-energy", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/high-energy")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /all-energy", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/all-energy")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /dog-friendly", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/dog-friendly")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /not-dog-friendly", function () {
  it("responds with json", function (done) {
    request(app)
      .get("/not-dog-friendly")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

