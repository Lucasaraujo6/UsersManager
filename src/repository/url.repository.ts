import knex from "../database";
import { IUser } from "../models/users.model";

// export async function getUrlObject(input: string) {
//   try {
//     const urlObject = knex("urls").where("shorter", input).select("url");
//     const url = await urlObject;
//     return url[0];
//   } catch (e) {
//     throw e;
//   }
// }

export async function insertUser(newUser: IUser) {
  // try {
  return await knex("users").insert({
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
    token: newUser.token,
  });
  // } catch (e) {
  //   throw e;
  // }
}
