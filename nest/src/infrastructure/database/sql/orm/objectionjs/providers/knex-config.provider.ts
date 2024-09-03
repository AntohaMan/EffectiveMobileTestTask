import { ConfigService } from '@nestjs/config';
import { FactoryProvider } from '@nestjs/common';
import { Knex } from 'knex';

const knexConfigProviderKey = Symbol('knexConfig');

export const knexConfigProvider: FactoryProvider<Knex.Config> = {
  provide: knexConfigProviderKey,
  inject: [ConfigService],
  async useFactory(configService: ConfigService) {
    return {
      client: configService.get('DB_CLIENT'),
      connection: {
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        user: configService.get('DB_USER'),
        database: configService.get('DB_DATABASE'),
        password: configService.get('DB_PASSWORD'),
      },
    };
  },
};
