import Image from 'next/image';

import cartImg from '../../assets/cart.svg';

import { HeaderContainer, LogoContainer, ButtonCart, HeaderContent } from './styles';

interface HeaderProps {
  showCheckout: () => void;
}

export function Header({ showCheckout }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <h1>MKS</h1>
          <span>Sistemas</span>
        </LogoContainer>
        <ButtonCart onClick={showCheckout}>
          <Image src={cartImg} alt="Imagem de carrinho de compras" />
          <strong>0</strong>
        </ButtonCart>
      </HeaderContent>
    </HeaderContainer>
  );
}