import { IProductData } from './product';

export interface CartItemProps extends IProductData {
  quantity: number;
}