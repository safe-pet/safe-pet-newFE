import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface childProps {
  loginHandler: () => void;
}

export const NaverLogin = () => {
  const router = useRouter();
  const { naver } = window as any;

  const loginFormWithNaver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL,
      callbackHandle: true,
      isPopup: false,
      loginButton: { color: "green", type: 4, height: "45" },
    });
    naverLogin.init();
  };

  useEffect(() => {
    loginFormWithNaver();
  }, []);

  useEffect(() => {
    if (window.location.href.includes("access_token")) {
      window.localStorage.setItem(
        "token",
        window.location.href.split("=")[1].split("&")[0] ?? "none",
      );
      router.push("/");
    }
  }, []);

  return (
    <>
      {/* <Image
        width="200"
        height="40"
        src={require("../../image/sp-naverLogin.png")}
        alt="naver login"
        // onClick={loginHandler}
      /> */}
      <div id="naverIdLogin" />
    </>
  );
};
