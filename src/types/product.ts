export interface IProductData {
  id: 1;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface CartItemProps extends IProductData {
  quantity: number;
}