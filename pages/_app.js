import { AnimatePresence } from "framer-motion";
import "../styles/globals.scss";
import MainLayout from "../layouts/MainLayout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </MainLayout>
  );
}

export default MyApp;
