import { Global, Module } from '@nestjs/common';
import { ReportService } from './report/report.service';
import { GenerateReportUseCase } from './generate-report.use-case';

@Global()
@Module({
  providers: [ReportService, GenerateReportUseCase],
  exports: [ReportService, GenerateReportUseCase],
})
export class UseCasesModule {}
