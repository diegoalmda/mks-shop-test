import Image from 'next/image';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../store';
import { addProductToCart, decreaseItemQuantity, removeItemFromCart } from '../../store/cart';
import { CartItemProps } from '../../types/cart';
import { formatCurrency } from '../../utils/formatCurrency';

import {
  CartProductContainer,
  CartContent,
  CartItemQuantity,
  QuantityValues,
  QuantityButtons,
  CloseButton,
  ImageContainer
} from './styles';

type CartProductProps = {
  cartItem: CartItemProps;
}

export function CartItem({ cartItem }: CartProductProps) {
  const dispatch = useDispatch<AppDispatch>();
  const productPrice = formatCurrency(cartItem.price);

  return (
    <CartProductContainer>
      <CloseButton title="Remover" onClick={() => dispatch(removeItemFromCart(cartItem))}>
        <span>X</span>
      </CloseButton>
      <CartContent>
        <ImageContainer>
          <Image src={cartItem.photo} width={55} height={55} alt={cartItem.name} />
          <p>{cartItem.name}</p>
        </ImageContainer>
        <CartItemQuantity>
          <QuantityValues>
            <small>Qtd:</small>
            <QuantityButtons>
              <button onClick={() => dispatch(decreaseItemQuantity(cartItem))}>-</button>
              <span>{cartItem.quantity}</span>
              <button onClick={() => dispatch(addProductToCart(cartItem))}>+</button>
            </QuantityButtons>
          </QuantityValues>
          <strong>R${productPrice}</strong>
        </CartItemQuantity>
      </CartContent>
    </CartProductContainer>
  );
}