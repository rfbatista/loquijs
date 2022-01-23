export class Identifier<T> {
  constructor(private value: T) {
    this.value = value;
  }

  equals(id?: Identifier<T>): boolean {
    if (id === null || id === undefined) {
      return false;
    }
    if (!(id instanceof this.constructor)) {
      return false;
    }
    return id.toValue() === this.value;
  }

  toString() {
    return String(this.value);
  }

  /**
   * Return raw value of identifier
   */

  toValue(): T {
    return this.value;
  }
}

export class UniqueEntityId extends Identifier<string | number> {
  constructor(id?: string | number) {
    super(id ? id : undefined);
  }
}

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityId;
  public readonly props: T;

  get id() {
    return this._id.toString();
  }

  constructor(props: T, id?: string) {
    this._id = id ? new UniqueEntityId(id) : new UniqueEntityId();
    this.props = props;
  }

  public equals(object?: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
