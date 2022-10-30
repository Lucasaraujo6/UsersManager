// import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import app from "../src/app";
import { ILogin, IRegister } from "../src/models/users.model";

import {
  createUser,
  loginUser,
  validateUserLoginData,
} from "../src/service/url.service";

const registerInfos: IRegister = {
  name: "astdina",
  email: "aavd3rfddsdsa2dingass@gmail.com",
  password: "0StringS",
  confirmPassword: "0stringS",
};

const loginData: ILogin = {
  email: "aavdrfddd32ds2dingass@gmail.com",
  password: "0stringS",
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhdmRyZmRkZDMyZHMyZGluZ2Fzc0BnbWFpbC5jb20iLCJpYXQiOjE2NjYyMjU0MjYsImV4cCI6MTY2NjMxMTgyNn0.2GzN9gR1TM1GOzh80kUQcCZQAJI9P0G7ss1EPKJD5TI";

describe("user test module", () => {
  // it("Create new user test", async () => {
  //   const res = await request(app).post("/api/signup").send(registerInfos);

  //   expect(res.status).toEqual(200);
  // });

  // it("Login test", async () => {
  //   const res = await request(app).post("/api/signin").send(loginData);

  //   expect(res.status).toEqual(200);
  // });

  // it("Validate user test", async () => {
  //   const res = await request(app)
  //     .get("/api/profile")
  //     .set("Authorization", "Bearer " + token);

  //   expect(res.status).toEqual(200);
  // });

  it("Create new user test", async () => {
    const res = await createUser(registerInfos);
    // if (token.token) return res.send(token.token).status(202);
    expect(res.token).not.toBeUndefined();
  });

  it("Login test", async () => {
    const token = await loginUser(loginData);
    expect(token);
  });

  it("Validate user test", async () => {
    const valid = await validateUserLoginData(loginData);
    expect(valid);
  });
});
