import { ApplicationResult } from './ApplicationResult';

export interface IApplicationService<Input, Output> {
  execute(input: Input): Promise<ApplicationResult<Output>>;
}
