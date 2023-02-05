import Image from "next/image";

export const NaverLogin = () => {
  return (
    <>
      <Image
        width="200"
        height="40"
        src={require("../../image/sp-naverLogin.png")}
        alt="naver login"
      />
    </>
  );
};
