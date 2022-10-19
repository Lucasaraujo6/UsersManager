import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name", 320);
    table.string("email", 320).unique().notNullable();
    table.string("password", 8);

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("users");
}
