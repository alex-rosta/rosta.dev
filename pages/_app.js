import '../styles/globals.css';
import Head from 'next/head';
import Header from '@/components/Header';
import { siteConfig } from '@/data/config/site';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="author" content={siteConfig.author} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
