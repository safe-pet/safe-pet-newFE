import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

export const Footer = () => {
  const pleaseLogin = (url: string) => {
    Router.push(url);
  };

  return (
    <FooterContainer>
      <Link href={"/"}>
        <Image
          className="home"
          src={require("src/image/sp-home1.png")}
          alt="홈"
        />
      </Link>
      <span onClick={() => pleaseLogin("/videos/add")}>
        <Image src={require("src/image/sp-mapmarker1.png")} alt="지도" />
      </span>
      <span onClick={() => pleaseLogin("/subscribe")}>
        <Image src={require("src/image/sp-chat1.png")} alt="채팅" />
      </span>
      <Link href={"/mypage"}>
        <Image
          className="myInfo"
          src={require("src/image/sp-person1.png")}
          alt="내정보"
        />
      </Link>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 480px;
  height: 60px;
  position: fixed;
  bottom: 0;
  background-color: #e9e7e7;
  /* padding: 0 20px; */
  & img {
    /* border: 1px solid black; */
    width: 40px;
    height: 40px;
    padding: 3px;
    &:active {
      border-radius: 15px;
      background-color: #e7e7e7;
    }
  }
  & .home {
    width: 50px;
    height: 50px;
    padding: 3px 0 0 0;
  }
  & .myInfo {
    width: 50px;
    height: 50px;
    padding: 0 0 5px 0;
  }
`;
