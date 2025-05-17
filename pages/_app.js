import '../styles/globals.css';
import Head from 'next/head';
import Header from '@/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>rosta.dev</title>
        <meta name="description" content="rosta.dev application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
