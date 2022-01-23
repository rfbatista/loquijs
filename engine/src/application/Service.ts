import { Result } from './Result';

export interface IService<Input, Output> {
  execute(input: Input): Promise<Result<Output>>;
}
