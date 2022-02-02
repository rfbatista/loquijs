import { AdapterResult } from 'src/adapters/AdapterResult';
import { IAdapterService } from 'src/adapters/AdapterService';

export type CreateDialogServiceInput = {};

export type CreateDialogServiceOutput = {};

export class CreateDialogServiceAdapter
  implements
    IAdapterService<CreateDialogServiceInput, CreateDialogServiceOutput>
{
  execute(
    input: CreateDialogServiceInput,
  ): Promise<AdapterResult<CreateDialogServiceOutput>> {
    throw new Error('Method not implemented.');
  }
}
