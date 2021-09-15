import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "react-multi-carousel/lib/styles.css";
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
};

export default MyApp;