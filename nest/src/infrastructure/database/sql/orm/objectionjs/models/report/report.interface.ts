import { BaseModelFields } from '../_base/base.model.types';

export interface ReportModelFields extends BaseModelFields {
  fileName: string;
  fileData: Buffer;
}
