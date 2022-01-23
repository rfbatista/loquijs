import { Entity } from 'src/application/Entity';
import { StepIdType } from './Step';
export enum ComponentsTypesEnum {
  hold = 'hold',
  goto = 'goto',
  text = 'text',
  image = 'image',
  remember = 'remember',
}

export type ComponentType = {
  id: string;
  type: ComponentsTypesEnum;
  stepId: StepIdType;
  order: number;
  payload: any;
};

export type TextComponentType = ComponentType & {
  type: ComponentsTypesEnum.text;
  text: string;
};

export type ImageComponentType = ComponentType & {
  type: ComponentsTypesEnum.image;
  url: string;
};

export type HoldComponentType = ComponentType & {
  type: ComponentsTypesEnum.hold;
  reference: StepIdType;
};

export type GoToComponentType = ComponentType & {
  type: ComponentsTypesEnum.goto;
  reference: StepIdType;
};

export type RememberComponentType = ComponentType & {
  type: ComponentsTypesEnum.remember;
};

export default class Component extends Entity<ComponentType> {}
