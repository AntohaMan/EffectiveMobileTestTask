import { Injectable } from '@nestjs/common';
import { ObjectionRepositoryBase } from '../_base/base.repository';
import { ReportModel } from './report.model';
import { ReportRepository } from '../../../../../../../domain/repositories/report.repository.abstract';
import { ReportEntity } from '../../../../../../../domain/entities/report.entity';
import { Buffer } from 'buffer';

@Injectable()
export class ObjectionReportRepository
  extends ObjectionRepositoryBase<ReportModel, ReportEntity>
  implements ReportRepository
{
  protected model = ReportModel;

  async save(fileName: string, fileData: Buffer): Promise<ReportEntity> {
    return super.insert({ file_name: fileName, file_data: fileData });
  }

  async findById(id: string): Promise<ReportEntity> {
    return super.findById(id);
  }
}
