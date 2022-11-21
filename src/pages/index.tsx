import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { getAllProducts } from '../services/products';
import { GlobalStyle } from '../styles/GlobalStyle';
import { IProductData } from '../types/product';
import { BoxSkeleton } from '../components/BoxSkeleton';

import Image from 'next/image';
import { formatCurrency } from '../utils/formatCurrency';

import bagImg from '../assets/shopping-bag.svg';

export default function Home() {
  const [products, setProducts] = useState<IProductData[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

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
      <GlobalStyle />
      <Head>
        <title>MKS Store</title>
      </Head>

      <Header />

      <main>
        {/* <BoxSkeleton /> */}
        {products.map((product) => (
          <div key={product.id}>
            <Image src={product.photo} alt={product.name} width={100} height={100} />
            <div>
              <p>{product.name}</p>
              <strong>R${formatCurrency(product.price)}</strong>
            </div>
            <small>{product.description}</small>
            <button>
              <Image src={bagImg} alt="" width={20} height={20} />
              <span>COMPRAR</span>
            </button>
          </div>
        ))}
      </main>


      <Footer />
    </>
  );
}
