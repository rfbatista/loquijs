import { StepType } from './Step';

export type FlowtYPE = {
  id: string;
  botId: string;
  name: string;
  metadata: any;
  steps: { [stepId: string | 'start']: StepType };
};

export class Flow {
	execute(){}

	run(){}

} 