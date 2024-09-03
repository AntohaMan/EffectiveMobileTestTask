import { ReportGenerator } from '../../../domain/interfaces/report-generator.interface';
import * as ExcelJS from 'exceljs';
import { Buffer } from 'buffer';
import { v4 as uuidv4 } from 'uuid';
import * as fs from 'fs';
import { join } from 'path';

export class ExcelReportGeneratorService implements ReportGenerator {
  async generateExcelReport(
    serviceName: string,
    data: any[],
    tableHeaders: string[],
  ): Promise<{ fileName: string; buffer: Buffer }> {
    const workbook = new ExcelJS.Workbook();

    const worksheet = workbook.addWorksheet(serviceName);

    worksheet.columns = tableHeaders.map((header) => ({
      header,
      key: header.toLowerCase(),
    }));

    worksheet.addRows(data);

    const dirPath = join(__dirname, '../../../..', 'report-excel');
    const fileName = `${uuidv4()}_${serviceName}`;
    const filePath = join(
      __dirname,
      '../../../../report-excel',
      `${fileName}.xlsx`,
    );

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    await workbook.xlsx.writeFile(filePath);
    console.log(`Файл сохранен по пути: ${filePath}`);
    const uint8Array = await workbook.xlsx.writeBuffer();
    const buffer = Buffer.from(uint8Array);
    return { fileName, buffer };
  }
}
