import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Layout } from "../src/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        // src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY} &autoload=false`}
        // src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=0fdb896f2fde78f39d7e89967733a73d&libraries=services&autoload=false,clusterer`}
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=0fdb896f2fde78f39d7e89967733a73d&libraries=services&autoload=false`}

        // strategy="beforeInteractive"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
