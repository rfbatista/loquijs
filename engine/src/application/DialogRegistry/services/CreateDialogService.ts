import { Result } from 'src/application/Result';
import { IService } from 'src/application/Service';
import { Flow, FlowType } from '../entities/Flow';

export type CreateDialogServiceOutput = {};

export type CreateDialogServiceInput = {
  dialog: FlowType;
};

export default class CreateDialogService
  implements IService<CreateDialogServiceInput, CreateDialogServiceOutput>
{
  constructor() {}
  async execute(
    input: CreateDialogServiceInput,
  ): Promise<Result<CreateDialogServiceOutput>> {
    const result = Flow.create(input.dialog);
    return result;
  }
}
