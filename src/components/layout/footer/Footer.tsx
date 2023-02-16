import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

export const Footer = () => {
  class FooterIcon {
    key: any;
    linkPage: any;
    imgIcon: any;
    constructor(key: any, url: any, imgName: any, imgAlt: any) {
      this.key = key;
      this.linkPage = () => {
        Router.push(url);
      };
      this.imgIcon = (
        <span onClick={() => this.linkPage(`${url}`)}>
          <Image src={require(`src/image/${imgName}.png`)} alt={`${imgAlt}`} />
        </span>
      );
    }
  }

  const homeIcon = new FooterIcon(1, "/", "sp-home3", "홈");
  const mapIcon = new FooterIcon(2, "/map", "sp-mapmarker1", "지도");
  const chatIcon = new FooterIcon(3, "/chat", "sp-chat1", "채팅");
  const myPage = new FooterIcon(4, "/mypage", "sp-person1", "내정보");

  const IconArray = [homeIcon, mapIcon, chatIcon, myPage];
  // const pleaseLogin = (url: string) => {
  //   Router.push(url);
  // };

  return (
    <FooterContainer>
      {IconArray.map(icon => (
        <div key={icon.key}>{icon.imgIcon}</div>
      ))}
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
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
