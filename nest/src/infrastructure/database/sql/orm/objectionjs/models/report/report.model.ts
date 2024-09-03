import { BaseModel } from '../_base/base.model';
import { ReportModelFields } from './report.interface';
import { TABLES } from '../../../../database.types';

export class ReportModel extends BaseModel implements ReportModelFields {
  static tableName = TABLES.REPORTS;

  fileName: string;
  fileData: Buffer;
}
