import { Global, Module } from '@nestjs/common';
import { ObjectionReportRepository } from './orm/objectionjs/models/report/report.repository';
import { knexConfigProvider } from './orm/objectionjs/providers/knex-config.provider';
import { knexProvider } from './orm/objectionjs/providers/knex.provider';
import { objectionModelProvider } from './orm/objectionjs/providers/objection-model.provider';
import { ReportRepository } from '../../../domain/repositories/report.repository.abstract';

@Global()
@Module({
  providers: [
    knexConfigProvider,
    knexProvider,
    objectionModelProvider,
    { provide: ReportRepository, useClass: ObjectionReportRepository },
  ],
  exports: [
    knexConfigProvider,
    knexProvider,
    objectionModelProvider,
    ReportRepository,
  ],
})
export class DatabaseModule {}
