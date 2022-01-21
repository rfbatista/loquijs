export interface Datasource<DataType> {
  save(data: DataType): void;
  delete(data: DataType): void;
  getByName(data: DataType): void;
}
