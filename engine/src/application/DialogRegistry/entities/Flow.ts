import { Entity } from 'src/application/Entity';
import { Step } from './Step';
import { Result } from '../../Result';

export type FlowIdType = string;

export type FlowType = {
  id: FlowIdType;
  name: string;
  metadata: any;
  start?: Step;
  steps?: Step[];
};

export class Flow extends Entity<FlowType> {
  static create(props: FlowType, id?: string) {
    return Result.ok(new Flow(props, id));
  }
}
