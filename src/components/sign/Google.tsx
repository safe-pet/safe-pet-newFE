import Image from "next/image";
import { useEffect } from "react";

export const GoogleLoginButton = () => {
  const initializeGoogleLogin = () => {
    window.onload = () => {};
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window;
      setTimeout(() => {
        initializeGoogleLogin();
      }, 100);
    }
  }, []);
  return (
    <>
      <button id="google-login-button">
        <Image
          width="200"
          height="40"
          src={require("../../image/sp-googleLogin.png")}
          alt="google login"
        />
      </button>
    </>
  );
};
