import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import "../styles/carousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
