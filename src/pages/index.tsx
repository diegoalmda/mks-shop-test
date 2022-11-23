import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
// import { getAllProducts } from '../services/api';
import { GlobalStyle } from '../styles/GlobalStyle';
import { IProductData } from '../types/product';
import { BoxSkeleton } from '../components/BoxSkeleton';
import { ProductCard } from '../components/ProductCard';
import { CardsContainer } from '../components/CardsContainer';
import { CheckoutSection } from '../components/CheckoutSection';
import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../store/fetchActions';
import { AppDispatch, RootState } from '../store';
import { fetchProducts, getAllProducts, getProductsStatus } from '../store/products';

export default function Home() {
  // const [products, setProducts] = useState<IProductData[] | null>([]);
  const [showCheckout, setShowCheckout] = useState(false);

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

  // useEffect(() => {
  //   getAllProducts()
  //     .then((data) => {
  //       if(data !== null){
  //         setProducts(data);
  //       }
  //     });
  // }, []);

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

      <Header showCheckout={handleShowCheckout} />

      <CardsContainer>
        {productsStatus === 'loading' && <BoxSkeleton />}
        {productsStatus === 'failed' && <p style={{color: 'red'}}>Ocorreu um erro no servidor de produtos!</p>}
        {list.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardsContainer>

      <Footer />
    </>
  );
}