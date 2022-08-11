import "../styles/globals.css";
import type { AppProps } from "next/app";
import "swiper/css/bundle";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
