import Image from 'next/image';
import { useSelector } from 'react-redux';

import cartImg from '../../assets/cart.svg';
import { cartQuantityItems } from '../../store/cart';

import { HeaderContainer, LogoContainer, ButtonCart, HeaderContent } from './styles';

interface HeaderProps {
  showCheckout: () => void;
}

export function Header({ showCheckout }: HeaderProps) {
  const numberOfItems = useSelector(cartQuantityItems);

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <h1>MKS</h1>
          <span>Sistemas</span>
        </LogoContainer>
        <ButtonCart type="button" onClick={showCheckout}>
          <Image src={cartImg} alt="Imagem de carrinho de compras" width={0} height={0} />
          <strong>{numberOfItems}</strong>
        </ButtonCart>
      </HeaderContent>
    </HeaderContainer>
  );
}