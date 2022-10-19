import knex from "../database";
import { ILogin, IUser } from "../models/users.model";

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
  try {
    const test = await knex("users").insert({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    });
    return test;
  } catch (e) {
    return e;
  }
}
export async function getUser(data: ILogin) {
  try {
    const test = await knex("users")
      .select("email", "password")
      .where({ email: data.email });
    console.log(test);
    return test;
  } catch (e) {
    return e;
  }
}
