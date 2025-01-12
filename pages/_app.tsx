import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { Header } from "../components/Layouts/header";
import { Page } from "../components/Layouts/page";
import { AppProps } from "next/app";
import { Nav } from "../components/ui/nav";

function MyApp({ Component, pageProps, router }: AppProps) {


  return (
    
    <Page>
      <div className="flex-row text-white bg-black">
        <Nav />
        <Component {...pageProps} />
      </div>
    </Page>
  );
}

export default MyApp;
