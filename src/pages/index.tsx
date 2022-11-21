import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>MKS Store</title>
        <meta name="description" content="Esta aplicação simula uma loja virtual para teste." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main>
        <h1>Hello MKS</h1>
      </main>

      <footer>
        MKS sistemas &#169; Todos os direitos reservados
      </footer>
    </div>
  );
}
