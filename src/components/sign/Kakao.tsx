import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

export const KakaoLoginButton = () => {
  const router = useRouter();

  const kakaoLoginHandler = () => {
    window.Kakao.Auth.login({
      success: (response: any) => {
        console.log("11111", response),
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: (res: any) => {
              const kakao_account = res.kakao_account;
              console.log("22222", kakao_account);
            },
          });
      },
      fail: (err: any) => {
        console.log(err);
      },
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
