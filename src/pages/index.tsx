import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { getAllProducts } from '../services/products';
import { GlobalStyle } from '../styles/GlobalStyle';
import { IProductData } from '../types/product';
import { BoxSkeleton } from '../components/BoxSkeleton';
import { ProductCard } from '../components/ProductCard';
import { CardsContainer } from '../components/CardsContainer';
import { CheckoutSection } from '../components/CheckoutSection';

export default function Home() {
  const [products, setProducts] = useState<IProductData[] | null>([]);
  const [showCheckout, setShowCheckout] = useState(false);

  function handleShowCheckout() {
    setShowCheckout(true);
  }

  function handleHideCheckout() {
    setShowCheckout(false);
  }

  useEffect(() => {
    getAllProducts()
      .then((data) => {
        if(data !== null){
          setProducts(data);
        }
      });
  }, []);

  return (
    <>
      <CheckoutSection
        products={products!}
        hideCheckout={handleHideCheckout}
        showCheckout={showCheckout}
      />

      <GlobalStyle />
      <Head>
        <title>MKS Store</title>
      </Head>

      <Header showCheckout={handleShowCheckout} />

      <CardsContainer>
        {products?.length === 0 && <BoxSkeleton />}
        {products === null && <p style={{color: 'red'}}>Ocorreu um erro no servidor de produtos!</p>}
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardsContainer>

      <Footer />
    </>
  );
}