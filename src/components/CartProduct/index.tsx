import Image from 'next/image';
import { CartItemProps } from '../../types/product';
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

export function CartProduct({ cartItem }: CartProductProps) {
  const productPrice = formatCurrency(cartItem.price);

  return (
    <CartProductContainer>
      <CloseButton title="Remover">
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
              <button>-</button>
              <span>{cartItem.quantity}</span>
              <button>+</button>
            </QuantityButtons>
          </QuantityValues>
          <strong>R${productPrice}</strong>
        </CartItemQuantity>
      </CartContent>
    </CartProductContainer>
  );
}