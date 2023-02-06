import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import { ClickDiv } from "../type";

export function BestMarkets() {
  let imageArray = [
    require("../../../image/sp-dummy1.png"),
    require("../../../image/sp-dummy2.png"),
    require("../../../image/sp-dummy3.png"),
    require("../../../image/sp-dummy1.png"),
    require("../../../image/sp-dummy2.png"),
    require("../../../image/sp-dummy3.png"),
    require("../../../image/sp-dummy1.png"),
    require("../../../image/sp-dummy2.png"),
    require("../../../image/sp-dummy3.png"),
    require("../../../image/sp-dummy1.png"),
    require("../../../image/sp-dummy2.png"),
    require("../../../image/sp-dummy3.png"),
    require("../../../image/sp-dummy1.png"),
    require("../../../image/sp-dummy2.png"),
    require("../../../image/sp-dummy3.png"),
  ];

  let imageArrLength = imageArray?.length;
  let indexRight = 170;

  const [imageNum, setImageNum] = useState(0);
  const [indexPx, setIndexPx] = useState(0);

  const goPrev = (e: ClickDiv) => {
    e.stopPropagation();
    if (imageNum !== 0) {
      setImageNum(imageNum - 1);
      setIndexPx(indexPx + indexRight);
    }
  };

  const goNext = (e: ClickDiv) => {
    e.stopPropagation();
    if (imageNum !== imageArray.length - 1 - 1) {
      setImageNum(imageNum + 1);
      setIndexPx(indexPx - indexRight);
    }
  };

  const slideButtons = [
    {
      name: "prev",
      handler: (e: ClickDiv) => {
        goPrev(e);
      },
      icon: "◀",
    },
    {
      name: "next",
      handler: (e: ClickDiv) => {
        goNext(e);
      },
      icon: "▶",
    },
  ];

  return (
    <Container>
      <ContentWrap>
        <p>Best View</p>
      </ContentWrap>
      <SlideContainer onClick={e => e.stopPropagation()}>
        <SlideBox
          style={{
            width: `${imageArrLength * indexRight}px`,
            transform: `translateX(${indexPx}px)`,
          }}
        >
          {imageArray?.map((item, index) => {
            return (
              <ViewItemWrap key={index}>
                <Image src={item} alt="slideImg" />
                <div>yohans</div>
                <span>서울</span>
                <span>1분 전</span>
              </ViewItemWrap>
            );
          })}
        </SlideBox>
        {slideButtons.map((item, index) => {
          const { name, handler, icon } = item;
          return (
            <PrevNextBtn key={index} className={name} onClick={handler}>
              {icon}
            </PrevNextBtn>
          );
        })}
      </SlideContainer>
    </Container>
  );
}
const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 95vw;
  animation: slideFadein 0.3s;
  @keyframes slideFadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  & ul,
  li {
    list-style: none;
    padding-left: 4px;
  }
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  & p {
    width: 80vw;
    font-size: 25px;
    font-weight: bold;
  }
`;

const SlideContainer = styled.div`
  margin: 0 auto;
  width: 380px;
  height: 300px;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
`;

const SlideBox = styled.div`
  display: flex;
  transition: 0.2s;
`;

const ViewItemWrap = styled.div`
  margin: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  & img {
    margin-bottom: 15px;
    width: 150px;
    height: 200px;
    text-align: center;
  }
  & div {
    margin-bottom: 10px;
  }
  & span {
    color: gray;
    font-size: 14px;
    font-weight: normal;
  }
`;

const PrevNextBtn = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 40px;
  border-radius: 15%;
  border: none;
  color: #c4c4c4;
  font-size: 1.8rem;
  background-color: transparent;
  position: absolute;
  left: 5%;
  top: 95%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.2s ease-in;
  &.next {
    position: absolute;
    left: 95%;
    top: 95%;
    transform: translate(-50%, -50%);
  }
  &:hover {
    color: black;
    background-color: lightgray;
  }
  &:active {
    transition: 0.1s;
    color: white;
  }
`;
