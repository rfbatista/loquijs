import Component from './Components';
import { Entity } from '../../Entity';
import { FlowIdType } from './Flow';

export type StepIdType = string;

export type StepType = {
  id: StepIdType;
  flowId: FlowIdType;
  name: string;
  metadata: any;
  components: Component[];
};

export class Step extends Entity<StepType> {}
