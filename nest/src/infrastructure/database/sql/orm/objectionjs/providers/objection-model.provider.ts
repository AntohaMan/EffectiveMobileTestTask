import { knexProvider } from './knex.provider';
import { FactoryProvider } from '@nestjs/common';
import type { Knex } from 'knex';
import { Model } from 'objection';

const objectionModelProviderKey = Symbol('objectionModel');

export const objectionModelProvider: FactoryProvider = {
  provide: objectionModelProviderKey,
  inject: [knexProvider.provide],
  async useFactory(knex: Knex) {
    Model.knex(knex);
    return Model;
  },
};
