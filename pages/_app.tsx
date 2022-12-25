import "styles/globals.css";
import "dist/assets/libs/tiny-slider/tiny-slider.css";
import "dist/assets/libs/tobii/css/tobii.min.css";
import "dist/assets/libs/@iconscout/unicons/css/line.css";
import "dist/assets/css/icons.css";
import "dist/assets/css/tailwind.css";

import type { AppProps } from "next/app";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
