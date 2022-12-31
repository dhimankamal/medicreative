import "styles/globals.css";
import "dist/assets/libs/tiny-slider/tiny-slider.css";
import "dist/assets/libs/tobii/css/tobii.min.css";
import "dist/assets/libs/@iconscout/unicons/css/line.css";
import "dist/assets/css/icons.css";
import "dist/assets/css/icons.min.css";
import "dist/assets/css/tailwind.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';
import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <ToastContainer />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
