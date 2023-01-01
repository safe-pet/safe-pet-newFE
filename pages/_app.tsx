import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Layout } from "../src/components/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
