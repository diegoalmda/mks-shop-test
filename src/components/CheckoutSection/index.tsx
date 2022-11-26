import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { AppDispatch } from '../../store';
import { getAllCartItems, clearCart } from '../../store/cart';
import { CartItemProps } from '../../types/cart';
import { CartItem } from '../CartItem';

import {
  CheckoutContainer,
  CheckoutHeader,
  ProductsContainer,
  TotalContainer,
  CheckoutButton
} from './styles';

type CheckoutSectionProps = {
  hideCheckout: () => void;
  showCheckout: boolean;
}

export function CheckoutSection({ hideCheckout, showCheckout }: CheckoutSectionProps) {
  const products: CartItemProps[] = useSelector(getAllCartItems);

  const total = products?.reduce((acc, cartItem) => {
    const price = parseFloat(cartItem.price);
    return acc + (cartItem.quantity * price);
  }, 0);

  const dispatch = useDispatch<AppDispatch>();

  function handleSendOrder() {
    dispatch(clearCart());
    hideCheckout();
    toast.success('Pedido efetuado!', { autoClose: 1200, position: 'top-center' });
  }

  return (
    <CheckoutContainer showCheckout={showCheckout}>
      <CheckoutHeader>
        <h1>Carrinho de compras</h1>
        <button title="Fechar" onClick={hideCheckout}>
          <span>X</span>
        </button>
      </CheckoutHeader>
      <ProductsContainer>
        {products?.map((product) => (
          <CartItem key={product.id} cartItem={product} />
        ))}
      </ProductsContainer>
      <TotalContainer>
        <span>
          Total:
        </span>
        <strong>R${`${total}`}</strong>
      </TotalContainer>
      <CheckoutButton
        onClick={handleSendOrder}
        disabled={products?.length === 0}
        title={`${products?.length > 0 ? '' : 'Adicione produtos ao carrinho!'}`}
      >
        <strong>
          Finalizar Compra
        </strong>
      </CheckoutButton>
    </CheckoutContainer>
  );
}