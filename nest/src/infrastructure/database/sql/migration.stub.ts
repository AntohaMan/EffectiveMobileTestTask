import { Knex } from 'knex';
import { TABLES } from './database.types';

const tableName = TABLES.REPORTS;

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, (tableBuilder) => {
    tableBuilder.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    tableBuilder.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}
