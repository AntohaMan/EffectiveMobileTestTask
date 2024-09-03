import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CreateReportRequestDTO } from './dtos/create-report.dto/create-report.request.dto';
import { ReportService } from '../../use-cases/report/report.service';
import { GenerateReportUseCase } from '../../use-cases/generate-report.use-case';
import { CreateReportResponseDTO } from './dtos/create-report.dto/create-report.response.dto';
import { Response } from 'express';

@Controller('reports')
export class ReportController {
  constructor(
    private readonly reportService: ReportService,
    private readonly generateReportUseCase: GenerateReportUseCase,
  ) {}
  //['ID', 'Name', 'Email', 'Date']
  @Post()
  async create(@Body() createReportRequestDTO: CreateReportRequestDTO) {
    //: Promise<CreateReportResponseDTO>
    try {
      const link = createReportRequestDTO.dataLink;
      const response = await fetch(`${link}`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();

      const report = await this.generateReportUseCase.execute(
        createReportRequestDTO.serviceName,
        data,
        createReportRequestDTO.tableHeaders,
      );
      return { id: report.id };
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  @Get(':id')
  async getById(@Param('id') id: string, @Res() res: Response) {
    const report = await this.reportService.getReportById(id);

    if (!report) {
      throw new NotFoundException('File not found');
    }

    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${report.fileName}.xlsx`,
    );
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.send(report.fileData);
  }
}
