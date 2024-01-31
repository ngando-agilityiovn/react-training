import { TAction } from './action';

export type TUpdateProductQuantity = {
  productId: string;
  action?: TAction;
  productQuantity?: number;
};
