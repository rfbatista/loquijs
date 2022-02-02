import Component, { ComponentsTypesEnum } from '../../entities/Components';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { StepIdType } from '../../entities/Step';
import StepSchema from './Step.schema';

export type ComponentSchemaType = {
  id?: string;
  type: ComponentsTypesEnum;
  stepId: StepIdType;
  order: number;
  payload: any;
};

@Entity()
export default class ComponentSchema implements ComponentSchemaType {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column({
    type: 'enum',
    enum: ComponentsTypesEnum,
  })
  type: ComponentsTypesEnum;

  @Column()
  order: number;

  @ManyToMany(() => StepSchema)
  stepId: string;

  @Column({
    type: 'json',
  })
  payload: any;

  constructor(props: ComponentSchemaType) {
    Object.assign(this, { ...props });
  }

  static from(entitty: Component) {
    return new ComponentSchema({
      id: entitty?.id?.toString(),
      type: entitty.props?.type,
      order: entitty.props?.order,
      stepId: entitty.props?.stepId,
      payload: entitty.props?.payload,
    });
  }

  static fromArray(entities: Component[]) {
    const schemas = [];
    for (const entity of entities) {
      schemas.push(ComponentSchema.from(entity));
    }
    return schemas;
  }
}
