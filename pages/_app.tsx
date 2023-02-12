import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { Layout } from "../src/components/layout";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src={`http://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`}
        strategy="beforeInteractive"
      />
      <script defer src="https://developers.kakao.com/sdk/js/kakao.js" />
      <Script src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" />
      <script src="https://accounts.google.com/gsi/client" async defer></script>
      <GoogleOAuthProvider
        clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GoogleOAuthProvider>
    </>
  );
}
