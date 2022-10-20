// import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../src/app";

const newUserData = {
  name: "astrina",
  email: "aavd3rfddd332dsa2dingass@gmail.com",
  password: "0stringS",
  confirmPassword: "0stringS",
};

const loginData = {
  email: "aavdrfddd32ds2dingass@gmail.com",
  password: "0stringS",
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhdmRyZmRkZDMyZHMyZGluZ2Fzc0BnbWFpbC5jb20iLCJpYXQiOjE2NjYyMjU0MjYsImV4cCI6MTY2NjMxMTgyNn0.2GzN9gR1TM1GOzh80kUQcCZQAJI9P0G7ss1EPKJD5TI";

describe("user test module", () => {
  it("Create new user test", async () => {
    const res = await request(app).post("/api/signup").send(newUserData);

    expect(res.status).toEqual(200);
  });

  it("Login test", async () => {
    const res = await request(app).post("/api/signin").send(loginData);

    expect(res.status).toEqual(200);
  });

  it("Validate user test", async () => {
    const res = await request(app)
      .get("/api/profile")
      .set("Authorization", "Bearer " + token);

    expect(res.status).toEqual(200);
  });
});
