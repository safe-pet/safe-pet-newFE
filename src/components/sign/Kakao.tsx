import Image from "next/image";

export const KakaoLogin = () => {
  return (
    <>
      <Image
        width="200"
        height="40"
        src={require("../../image/sp-kakaoLogin.png")}
        alt="kakao login"
      />
    </>
  );
};
