import { useSelector } from 'react-redux';
import { getAllCartItems } from '../../store/cart';
import { IProductData } from '../../types/product';
import { CartProduct } from '../CartProduct';
import {
  CheckoutContainer,
  CheckoutHeader,
  ProductsContainer,
  TotalContainer,
  CheckoutButton
} from './styles';

type CheckoutSectionProps = {
  // products: IProductData[];
  hideCheckout: () => void;
  showCheckout: boolean;
}

export function CheckoutSection({ hideCheckout, showCheckout }: CheckoutSectionProps) {
  const products = useSelector(getAllCartItems);

  return (
    <CheckoutContainer showCheckout={showCheckout}>
      <CheckoutHeader>
        <h1>Carrinho de compras</h1>
        <button title="Fechar" onClick={hideCheckout}>
          <span>X</span>
        </button>
      </CheckoutHeader>
      <ProductsContainer>
        {products.map((product) => (
          <CartProduct key={product.id} cartItem={product} />
        ))}
      </ProductsContainer>
      <TotalContainer>
        <span>
          Total:
        </span>
        <strong>
          R$798
        </strong>
      </TotalContainer>
      <CheckoutButton>
        <strong>
          Finalizar Compra
        </strong>
      </CheckoutButton>
    </CheckoutContainer>
  );
}