export interface ReportGenerator {
  generateExcelReport(
    serviceName: string,
    data: any[],
    tableHeaders: string[],
  ): Promise<{ fileName: string; buffer: Buffer }>;
}
