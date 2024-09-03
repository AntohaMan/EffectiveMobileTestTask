import { BaseEntity } from './base.entity';

export class ReportEntity extends BaseEntity {
  fileName: string;
  fileData: Buffer;
}
