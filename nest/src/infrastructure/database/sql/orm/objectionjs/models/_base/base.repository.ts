import { ModelClass } from 'objection';
import { BaseModel } from './base.model';

export abstract class ObjectionRepositoryBase<
  OrmModel extends BaseModel,
  Entity,
> {
  protected abstract model: ModelClass<OrmModel>;
  async insert(obj): Promise<Entity> {
    const result = await this.model.query().insertAndFetch(obj);
    return result as Entity;
  }

  async findById(id: string): Promise<Entity> {
    const result = await this.model.query().findById(id);
    return result as Entity;
  }
}
