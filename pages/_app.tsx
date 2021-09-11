import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;