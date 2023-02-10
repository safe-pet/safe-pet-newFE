import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

interface childProps {
  loginHandler: () => void;
}

export const NaverLoginButton = () => {
  const router = useRouter();

  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = process.env.NEXT_PUBLIC_CALLBACK_URL;

  const initializeNaverLogin = (window: any) => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: NAVER_CLIENT_ID,
      callbackUrl: NAVER_CALLBACK_URL,
      isPopup: false,
      loginButton: { color: "green", type: 4, height: 58 },
      callbackHandle: true,
    });
    naverLogin.init();

    naverLogin.getLoginStatus(async function (status: any) {
      if (status) {
        const { id, nickname, profile_image } = naverLogin.user;
        console.log(id);
        console.log(nickname);
        console.log(profile_image);
      }
    });
    // 요기!
  };
  // console.log(window);

  const userAccessToken = (window: any) => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = async () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    // console.log, alert 창을 통해 토큰이 잘 추출 되는지 확인하자!

    console.log(token);
    // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!
    localStorage.setItem("access_token", token);
    // setGetToken(token)
  };

  // 화면 첫 렌더링이후 바로 실행하기 위해 useEffect 를 사용하였다.
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window;
        setTimeout(() => {
          initializeNaverLogin(window);
          userAccessToken(window);
        }, 100);
      }
    } catch (e) {}
  }, []);

  return (
    <>
      {/* <Image
        id="naverIdLogin"
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
