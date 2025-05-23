import Theme from '../styles/theme';
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>IEEE SB CEC</title>
        <meta name="description" content="IEEE Student Branch of College of Engineering Chengannur" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 