import Image from 'next/image';

import { IProductData } from '../../types/product';
import { formatCurrency } from '../../utils/formatCurrency';

import bagImg from '../../assets/shopping-bag.svg';

import {
  ProductCardContainer,
  ProductInfo,
  ProductCardContent,
  BuyButton
} from './styles';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../store/cart';
import { AppDispatch } from '../../store';

type ProductCardProps = {
  product: IProductData,
}

export function ProductCard({ product }: ProductCardProps) {
  const productPrice = formatCurrency(product.price);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <ProductCardContainer>
      <ProductCardContent>
        <Image src={product.photo} alt={product.name} width={138} height={138} />
        <ProductInfo>
          <p>{product.name}</p>
          <strong>R${productPrice}</strong>
        </ProductInfo>
        <small>{product.description}</small>
      </ProductCardContent>
      <BuyButton onClick={() => dispatch(addProductToCart(product))}>
        <Image src={bagImg} alt="" width={0} height={0} />
        <span>COMPRAR</span>
      </BuyButton>
    </ProductCardContainer>
  );
}