import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  DB_CLIENT: process.env.DB_CLIENT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: +process.env.DB_PORT || 5432,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
}));
