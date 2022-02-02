import {
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  Entity,
} from 'typeorm';
import StepSchema from './Step.schema';
import { Flow } from '../../entities/Flow';

export type FlowSchemaType = {
  id?: string;
  name: string;
  start?: StepSchema;
  steps?: StepSchema[];
};

@Entity()
export class FlowSchema implements FlowSchemaType {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  name: string;

  @OneToOne(() => StepSchema, (step) => step.flow)
  start: StepSchema;

  @OneToMany(() => StepSchema, (step) => step.flow)
  steps: StepSchema[];

  constructor(props: FlowSchemaType) {
    Object.assign(this, { ...props });
  }

  from(entity: Flow) {
    return new FlowSchema({
      id: entity.id,
      name: entity.props.name,
      start: StepSchema.from(entity.props.start),
      steps: StepSchema.fromArray(entity.props.steps),
    });
  }
}
