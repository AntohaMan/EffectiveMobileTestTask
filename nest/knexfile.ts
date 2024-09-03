import { config as dConfig } from 'dotenv';
import { Knex } from 'knex';
import { join } from 'path';

dConfig({ path: `.${process.env.NODE_ENV}.env` });

const knexConfig: Knex.Config = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    loadExtensions: ['.ts'],
    tableName: 'knex_migrations',
    directory: join(
      __dirname,
      'src',
      'infrastructure',
      'database',
      'sql',
      'orm',
      'objectionjs',
      'migrations',
    ),
    stub: join(
      __dirname,
      'src',
      'infrastructure',
      'database',
      'sql',
      'migration.stub.ts',
    ),
  },
};

module.exports = knexConfig;
