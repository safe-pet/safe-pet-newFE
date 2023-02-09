import styled from "styled-components";
import Image from "next/image";
import { NextHead } from "../../src/utils/NextHead";
import { KakaoLogin } from "../../src/components/sign/Kakao";
import { NaverLogin } from "../../src/components/sign/Naver";
import { GoogleLogin } from "../../src/components/sign/Google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../../src/utils/LoadingSpinner";

declare global {
  interface Window {
    Kakao: any;
    naver: any;
  }
}

export default function Login() {
  const router = useRouter();

  return (
    <LoginContainer>
      {/* {isLoading ? <LoadingSpinner /> : null} */}
      <NextHead descrpition="safe-pet login" />
      <SignWrap>
        <Image
          src={require("../../src/image/mainLogo.png")}
          alt="main logo"
          priority
          width={360}
        />
        <SocialLogins>
          <KakaoLogin />
          <NaverLogin />
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
    cursor: pointer;
  }
`;
