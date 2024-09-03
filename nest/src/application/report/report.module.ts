import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ExelReportModule } from '../../infrastructure/services/excel-report/exel-report.module';

@Module({
  controllers: [ReportController],
  imports: [ExelReportModule],
})
export class ReportModule {}
