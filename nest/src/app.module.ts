import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationModule } from './application/application.module';
import { UseCasesModule } from './use-cases/use-cases.module';
import databaseConfig from './infrastructure/config/database.config';
import { DatabaseModule } from './infrastructure/database/sql/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
      //load: [databaseConfig],
    }),
    ApplicationModule,
    DatabaseModule,
    UseCasesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
