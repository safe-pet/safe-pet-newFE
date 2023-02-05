import styled from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ClickDiv } from "../type";

export const EventSlide = () => {
  let imageArray = [
    require("../../../image/mainLogo.png"),
    require("../../../image/mainLogo.png"),
    require("../../../image/mainLogo.png"),
    require("../../../image/mainLogo.png"),
  ];

  let imageArrLength = imageArray?.length + 2;
  let indexRight = 380;

  const [imageNum, setImageNum] = useState(1);
  const [indexPx, setIndexPx] = useState(0);
  const [indexInit, setIndexInit] = useState(0.3);

  useEffect(() => {
    setIndexInit(0);
    setIndexPx(indexPx - indexRight);
    setTimeout(() => {
      setIndexInit(0.2);
    }, 300);
  }, []);

  const goPrev = (e: ClickDiv) => {
    e.stopPropagation();
    if (imageNum !== 1) {
      setImageNum(imageNum - 1);
      setIndexPx(indexPx + indexRight);
    } else {
      setImageNum(imageArrLength - 2);
      setIndexPx(indexPx + indexRight);
      setTimeout(() => {
        setIndexInit(0);
        setIndexPx(indexRight * (-imageArrLength + 2));
      }, 200);
      setTimeout(() => {
        setIndexInit(0.3);
      }, 300);
    }
  };

  const goNext = (e: ClickDiv) => {
    e.stopPropagation();
    if (imageNum !== imageArrLength - 2) {
      setImageNum(imageNum + 1);
      setIndexPx(indexPx - indexRight);
    } else {
      setImageNum(1);
      setIndexPx(indexPx - indexRight);
      setTimeout(() => {
        setIndexInit(0);
        setIndexPx(indexRight * -1);
      }, 200);
      setTimeout(() => {
        setIndexInit(0.3);
      }, 300);
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
        <p>EVENTS</p>
      </ContentWrap>
      <SlideContainer onClick={(e: ClickDiv) => e.stopPropagation()}>
        <SlideBox
          style={{
            width: `${imageArrLength * indexRight}px`,
            transform: `translateX(${indexPx}px)`,
            transition: `${indexInit}s`,
          }}
        >
          <Image src={imageArray[imageArray.length - 1]} alt="cloneEnd" />
          {imageArray?.map((item, index) => (
            <Image key={index} src={item} alt="slideImg" />
          ))}
          <Image src={imageArray[0]} alt="cloneStart" />
        </SlideBox>
        {slideButtons.map((item, index) => {
          const { name, handler, icon } = item;
          return (
            <PrevNextBtn key={index} className={name} onClick={handler}>
              {icon}
            </PrevNextBtn>
          );
        })}
        <NumBox>
          <span>{`${imageNum} / ${imageArrLength - 2}`}</span>
          {slideButtons.map((item, index) => {
            const { name, handler, icon } = item;
            return (
              <SubPrevNextBtn key={index} className={name} onClick={handler}>
                {icon}
              </SubPrevNextBtn>
            );
          })}
        </NumBox>
      </SlideContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
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
  margin: 0px auto;
  margin-top: 100px;
  width: 380px;
  height: 300px;
  overflow: hidden;
  border: 1px solid black;
  user-select: none;
  -webkit-user-select: none;
`;

const SlideBox = styled.div`
  display: flex;
  transition: 0.2s;
  & img {
    width: 380px;
    height: 300px;
    text-align: center;
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
  top: 38%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.2s ease-in;
  &.next {
    position: absolute;
    left: 95%;
    top: 38%;
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

const NumBox = styled.div`
  padding: 0 5px 0 5px;
  position: absolute;
  top: 23%;
  right: 60px;
  display: flex;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #ffffff;
  color: black;
  font-size: 13px;
  font-weight: bold;
`;

const SubPrevNextBtn = styled.span`
  margin-left: 5px;
  transition: 0.2s;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #696969;
  }
  &:active {
    background-color: white;
  }
`;
