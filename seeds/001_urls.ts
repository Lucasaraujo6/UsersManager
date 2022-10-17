import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *  npx knex seed:make 001_urls //cria seed vazia
 *  npx knex seed:run  //executa as seeds
 */
exports.seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      name: "lucasaraujo6",
      email: "lucas.paula@rethink.dev",
      password: "Senhadez",
      token: "akdhiuy187y219837123981u093821-3178489+",
    },
  ]);
};
