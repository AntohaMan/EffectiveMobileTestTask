import { Injectable } from '@nestjs/common';
import { ReportRepository } from '../../domain/repositories/report.repository.abstract';
import { ReportEntity } from '../../domain/entities/report.entity';
import { Buffer } from 'buffer';

@Injectable()
export class ReportService {
  constructor(private readonly reportRepository: ReportRepository) {}

  async createReport(
    fileName: string,
    fileData: Buffer,
  ): Promise<ReportEntity> {
    return this.reportRepository.save(fileName, fileData);
  }

  async getReportById(id: string): Promise<ReportEntity> {
    return this.reportRepository.findById(id);
  }
}
