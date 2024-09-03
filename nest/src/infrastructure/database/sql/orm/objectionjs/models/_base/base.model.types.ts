export interface BaseIdModelField {
  id: string;
}

export interface BaseModelFields extends BaseIdModelField {
  createdAt: Date;
  updatedAt?: Date;
}
