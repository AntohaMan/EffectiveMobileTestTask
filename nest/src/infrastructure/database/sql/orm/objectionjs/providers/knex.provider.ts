import { FactoryProvider } from '@nestjs/common';
import { knexConfigProvider } from './knex-config.provider';
import type { Knex as KnexFactory } from 'knex';
import Knex from 'knex';
import { snakeCaseMappers } from 'objection';

const knexProviderKey = Symbol('knex');

export const knexProvider: FactoryProvider = {
  provide: knexProviderKey,
  inject: [knexConfigProvider.provide],
  useFactory: (knexConfig: KnexFactory.Config) => {
    return Knex({ ...knexConfig, ...snakeCaseMappers() });
  },
};
