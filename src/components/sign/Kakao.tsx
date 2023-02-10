import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const KakaoLoginButton = () => {
  const router = useRouter();

  const kakaoLoginHandler = () => {
    window.Kakao.Auth.authorize({
      redirectUri: `${process.env.NEXT_PUBLIC_CALLBACK_URL}`,
      prompts: "login",
    });
  };

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        setTimeout(() => {
          window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
        }, 100);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Image
        width="200"
        height="40"
        src={require("../../image/sp-kakaoLogin.png")}
        alt="kakao login"
        onClick={kakaoLoginHandler}
      />
    </>
  );
};
