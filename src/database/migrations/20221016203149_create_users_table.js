/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * comands:
 * knex migrate:make create_projects_table
 * npx  knex migrate:list
 * npx knex migrate:up nome_da_migration.js
 * npx knex migrate:latest
 */
exports.up = (knex) =>
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name", 320);
    table.string("email", 320).unique().notNullable();
    table.string("password", 8);

    table.timestamps(true, true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTable("users");
