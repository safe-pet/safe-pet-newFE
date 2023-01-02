import styled from "styled-components";
import Image from "next/image";
import { NextHead } from "../../src/utils/NextHead";
import { KakaoLogin } from "../../src/components/sign/Kakao";
import { NaverLogin } from "../../src/components/sign/Naver";

// 특정 정보 받기 위해
// main 구성 후 naver api 등록 검수 요청 필요

export default function Login() {
  return (
    <LoginContainer>
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
        </SocialLogins>
      </SignWrap>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
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
  }
`;
