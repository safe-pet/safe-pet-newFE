import styled from "styled-components";
import Image from "next/image";

// 특정 정보 받기 위해
// main 구성 후 naver api 등록 검수 요청 필요

export default function Login() {
  return (
    <LoginContainer>
      <SignWrap>
        <Image
          width={350}
          src={require("../src/image/mainLogo.png")}
          alt="main logo"
        />
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
  flex-direction: row;
  justify-content: center;
`;
