import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Step } from '../../entities/Step';
import ComponentSchema from './ComponentSchema';
import { FlowSchema } from './FlowSchema';
export type StepSchemaType = {
  id?: string;
  name: string;
  flow: string;
  components?: ComponentSchema[];
};

@Entity()
export default class StepSchema implements StepSchemaType {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name: string;

  @ManyToOne(() => FlowSchema, (flow) => flow.steps)
  flow: string;

  @ManyToMany(() => StepSchema)
  components?: ComponentSchema[];

  constructor(props: StepSchemaType) {
    Object.assign(this, { ...props });
  }

  static from(entity: Step) {
    return new StepSchema({
      id: entity?.id,
      flow: entity?.props?.flowId,
      name: entity?.props?.name,
      components: ComponentSchema.fromArray(entity?.props?.components),
    });
  }

  static fromArray(entities: Step[]) {
    const schemas = [];
    for (const entity of entities) {
      schemas.push(StepSchema.from(entity));
    }
    return schemas;
  }
}
