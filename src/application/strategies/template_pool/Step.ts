import { Component } from '../../Components';

export type StepType = {
  id: string;
  name: string;
	metadata: any;
  root: Component;
  components: { [componentId: string]: Component };
};

export class Step {
	execute(){}

	run(){}
}