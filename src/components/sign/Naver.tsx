import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface childProps {
  loginHandler: () => void;
}

export const NaverLogin = () => {
  const router = useRouter();

  const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_ID;
  const NAVER_CALLBACK_URL = process.env.NEXT_PUBLIC_CALLBACK_URL;

  const [userInfo, setUserInfo] = useState();

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
        // 아래처럼 선택하여 추출이 가능하고,
        const userid = naverLogin.user.getEmail();
        const username = naverLogin.user.getName();
        // 정보 전체를 아래처럼 state 에 저장하여 추출하여 사용가능하다.
        // setUserInfo(naverLogin.user)
      }
    });
    // 요기!
  };

  // 네이버 소셜 로그인 (네아로) 는 URL 에 엑세스 토큰이 붙어서 전달된다.
  // 우선 아래와 같이 토큰을 추출 할 수 있으며,
  // 3부에 작성 될 Redirect 페이지를 통해 빠르고, 깨끗하게 처리가 가능하다.

  const userAccessToken = (window: any) => {
    window.location.href.includes("access_token") && getToken();
  };

  const getToken = () => {
    const token = window.location.href.split("=")[1].split("&")[0];
    // console.log, alert 창을 통해 토큰이 잘 추출 되는지 확인하자!

    // 이후 로컬 스토리지 또는 state에 저장하여 사용하자!
    // localStorage.setItem('access_token', token)
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
