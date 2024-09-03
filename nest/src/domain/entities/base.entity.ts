export class BaseIdEntity {
  id: string;
}

export class BaseEntity extends BaseIdEntity {
  createdAt: Date;
  updatedAt: Date;
}
