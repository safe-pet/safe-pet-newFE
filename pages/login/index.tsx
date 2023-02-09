import styled from "styled-components";
import Image from "next/image";
import { NextHead } from "../../src/utils/NextHead";
import { KakaoLogin } from "../../src/components/sign/Kakao";
import { NaverLogin } from "../../src/components/sign/Naver";
import { GoogleLogin } from "../../src/components/sign/Google";
// 특정 정보 받기 위해
// main 구성 후 소셜로그인(NAVER) api 등록 검수 요청 필요

import Router from "next/router";
import { useState } from "react";
import { LoadingSpinner } from "../../src/utils/LoadingSpinner";

export default function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loginHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Router.push("/");
    }, 1000);
  };

  return (
    <LoginContainer>
      {isLoading ? <LoadingSpinner /> : null}
      <NextHead descrpition="safe-pet login" />
      <SignWrap>
        <Image
          src={require("../../src/image/mainLogo.png")}
          alt="main logo"
          priority
          width={360}
        />
        <SocialLogins>
          {/* <KakaoLogin /> */}
          <NaverLogin loginHandler={loginHandler} />
          {/* <GoogleLogin /> */}
        </SocialLogins>
      </SignWrap>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
`;

const SignWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLogins = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    border-radius: 12px;
    margin: 5px 0 5px 0;
  }
`;
