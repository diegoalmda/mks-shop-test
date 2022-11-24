import dynamic from 'next/dynamic';
import { useEffect, useState, useTransition } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import { Footer } from '../components/Footer';
import { ProductsSkeleton } from '../components/Skeleton/ProductsSkeleton';
import { ProductCard } from '../components/ProductCard';
import { CardsContainer } from '../components/CardsContainer';
import { CheckoutSection } from '../components/CheckoutSection';

import { fetchProducts, getAllProducts, getProductsStatus } from '../store/products';
import { AppDispatch } from '../store';

import { GlobalStyle } from '../styles/GlobalStyle';
import { HeaderSkeleton } from '../components/Skeleton/HeaderSkeleton';

const Header = dynamic(() => import('../components/Header').then(mod => mod.Header));

export default function Home() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [isPending] = useTransition();

  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector(getAllProducts);
  const productsStatus = useSelector(getProductsStatus);

  function handleShowCheckout() {
    setShowCheckout(true);
  }

  function handleHideCheckout() {
    setShowCheckout(false);
  }

  useEffect(() => {
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch]);

  return (
    <>
      <CheckoutSection
        hideCheckout={handleHideCheckout}
        showCheckout={showCheckout}
      />

      <GlobalStyle />
      <Head>
        <title>MKS Store</title>
      </Head>

      { isPending ? <HeaderSkeleton /> : <Header showCheckout={handleShowCheckout} /> }

      <CardsContainer>
        {productsStatus === 'loading' && <ProductsSkeleton />}
        {productsStatus === 'failed' && <p style={{color: 'red'}}>Ocorreu um erro no servidor de produtos!</p>}
        {list.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardsContainer>

      <Footer />
    </>
  );
}