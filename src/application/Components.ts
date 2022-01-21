import { UserState } from './User';

export enum ComponentsTypesEnum {
  hold = 'hold',
  goto = 'goto',
  text = 'text',
  image = 'image',
  remember = 'remember',
}

export type Component = {
  id: string;
};

export type TextComponent = Component & {
  type: ComponentsTypesEnum.text;
  text: string;
};
export type ImageComponent = Component & {
  type: ComponentsTypesEnum.image;
  url: string;
};
export type HoldComponent = Component & {
  type: ComponentsTypesEnum.hold;
  reference: UserState;
};
export type GoToComponent = Component & {
  type: ComponentsTypesEnum.goto;
  reference: UserState;
};
export type RememberComponent = Component & {
  type: ComponentsTypesEnum.remember;
};
