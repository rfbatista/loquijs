import { ApplicationResult } from 'src/application/ApplicationResult';
import { IApplicationService } from 'src/application/Service';
import { Flow, FlowType } from '../entities/Flow';

type ComponentType = {};

type DialogNode = {
  id: string;
  type: 'step';
  data: ComponentType[];
  position: { x: number; y: number };
};

export type CreateDialogServiceOutput = {};

export type CreateDialogServiceInput = {
  name: string;
  dialog: DialogNode[];
};

export default class CreateDialogService
  implements
    IApplicationService<CreateDialogServiceInput, CreateDialogServiceOutput>
{
  constructor() {}
  async execute(
    input: CreateDialogServiceInput,
  ): Promise<ApplicationResult<CreateDialogServiceOutput>> {
    const flowOrError = Flow.create({ name: input.name });
		if(flowOrError.isFailure)
			return flowOrError;
		const flow = flowOrError.getValue()
    return;
  }
}
