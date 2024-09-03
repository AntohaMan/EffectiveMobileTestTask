import { Model, snakeCaseMappers } from 'objection';
import { BaseIdModelField, BaseModelFields } from './base.model.types';

export class BaseIdModel extends Model implements BaseIdModelField {
  id: string;
}

export class BaseModel extends BaseIdModel implements BaseModelFields {
  createdAt: Date;
  updatedAt?: Date;

  $beforeUpdate(): void {
    this.updatedAt = new Date();
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}
