import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import "../styles/carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MainLayout from "../layouts/MainLayout";

function MyApp({ Component, pageProps, router }) {
  const url = `https://wallis.dev${router.route}`;
  return (
    <MainLayout>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
    </MainLayout>
  );
}

export default MyApp;
