import { store } from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import NextNProgress from 'nextjs-progressbar';
import Header from "@/components/Header";
import Categorybar from "@/components/Categorybar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <NextNProgress />
    <Header/>
    <Categorybar/>

      <Component {...pageProps} />
    </Provider>
  );
}
