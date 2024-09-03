import { ReportEntity } from '../entities/report.entity';

export abstract class ReportRepository {
  abstract save(fileName: string, fileData: Buffer): Promise<ReportEntity>;
  abstract findById(id: string): Promise<ReportEntity>;
}
