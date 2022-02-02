import { AdapterResult } from './AdapterResult';

export interface IAdapterService<Input, Output> {
  execute(input: Input): Promise<AdapterResult<Output>>;
}
