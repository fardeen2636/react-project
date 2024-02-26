import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/bootstrap.css";
import "@/styles/responsive.css";
import "@/styles/style.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}