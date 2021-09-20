import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "react-multi-carousel/lib/styles.css";
import "react-image-gallery/styles/scss/image-gallery.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';
import type { AppProps } from 'next/app';
import Layout from '../layout/Layout';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
};

const makestore: any = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);