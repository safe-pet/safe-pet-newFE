import Image from "next/image";

interface childProps {
  loginHandler: () => void;
}

export const NaverLogin = ({ loginHandler }: childProps) => {
  return (
    <>
      <Image
        width="200"
        height="40"
        src={require("../../image/sp-naverLogin.png")}
        alt="naver login"
        onClick={loginHandler}
      />
    </>
  );
};
