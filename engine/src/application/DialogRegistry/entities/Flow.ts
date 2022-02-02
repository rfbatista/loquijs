import { Entity } from 'src/application/Entity';
import { Step } from './Step';
import { ApplicationResult } from '../../ApplicationResult';

export type FlowType = {
  name: string;
  metadata?: any;
  start?: Step;
  steps?: Step[];
};

export class Flow extends Entity<FlowType> {
  static create(props: FlowType, id?: string) {
    return ApplicationResult.ok(new Flow(props, id));
  }

  addStep(step: Step) {
    this.props.steps = [...this.props.steps, step];
  }
}
