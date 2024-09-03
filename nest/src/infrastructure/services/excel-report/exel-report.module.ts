import { Module } from '@nestjs/common';
import { GenerateReportUseCase } from '../../../use-cases/generate-report.use-case';
import { ExcelReportGeneratorService } from './excel-report-generator.service';
import { ReportService } from '../../../use-cases/report/report.service';

@Module({
  providers: [
    {
      provide: GenerateReportUseCase,
      useFactory: (
        reportGenerator: ExcelReportGeneratorService,
        reportService,
      ) => {
        return new GenerateReportUseCase(reportGenerator, reportService);
      },
      inject: [ExcelReportGeneratorService, ReportService],
    },
    ExcelReportGeneratorService,
  ],
  exports: [GenerateReportUseCase],
})
export class ExelReportModule {}
