import Image from "next/image";
import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const GoogleLoginButton = () => {
  const getUserInfo = async (credentialResponse: any) => {
    const data = await axios.get(
      `https://www.googleapis.com/auth/userinfo.profile`,
      {
        headers: {
          Authorization: `Bearer ${credentialResponse}`,
        },
      },
    );
    console.log("userDataa", data);
  };
  //https://www.googleapis.com/oauth2/v3/userinfo
  return (
    <>
      {/* <Image
        width="200"
        height="40"
        src={require("../../image/sp-googleLogin.png")}
        alt="google login"
      /> */}
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log("1111", credentialResponse);
          getUserInfo(credentialResponse.credential);
        }}
        onError={() => console.log("login faild")}
      />
    </>
  );
};
