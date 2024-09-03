import { ReportGenerator } from '../domain/interfaces/report-generator.interface';
import { ReportService } from './report/report.service';
import {ReportEntity} from "../domain/entities/report.entity";

export class GenerateReportUseCase {
  constructor(
    private reportGenerator: ReportGenerator,
    private reportService: ReportService,
  ) {}

  async execute(
    serviceName: string,
    data: any[],
    tableHeaders: string[],
  ): Promise<ReportEntity> {
    const { fileName, buffer } = await this.reportGenerator.generateExcelReport(
      serviceName,
      data,
      tableHeaders,
    );
    return this.reportService.createReport(fileName, buffer);
  }
}
