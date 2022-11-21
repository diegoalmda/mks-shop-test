import Image from 'next/image';

import cartImg from '../../assets/cart.svg';

import { HeaderContainer, LogoContainer, ButtonCart, HeaderContent } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <h1>MKS</h1>
          <span>Sistemas</span>
        </LogoContainer>
        <ButtonCart>
          <Image src={cartImg} alt="Imagem de carrinho de compras" />
          <strong>0</strong>
        </ButtonCart>
      </HeaderContent>
    </HeaderContainer>
  );
}