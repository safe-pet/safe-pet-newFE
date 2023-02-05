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
  const [indexInit, setIndexInit] = useState(0.1);

  useEffect(() => {
    setIndexInit(0);
    setIndexPx(indexPx - indexRight);
    setTimeout(() => {
      setIndexInit(0.1);
    }, 300);
  }, []);

  const [imageChange, setImageChange] = useState<boolean>(false);

  const goPrev = (e: ClickDiv) => {
    e.stopPropagation();
    if (imageChange) return;
    setImageChange(true);
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
        setIndexInit(0.1);
      }, 300);
    }
    setImageChange(false);
  };
  console.log(imageChange);
  const goNext = (e: ClickDiv) => {
    e.stopPropagation();
    if (imageChange) return;
    setImageChange(true);
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
        setIndexInit(0.1);
      }, 300);
    }
    setImageChange(false);
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
        {/* <ArrowBox> */}
        {slideButtons.map((item, index) => {
          const { name, handler, icon } = item;
          return (
            <PrevNextBtn key={index} className={name} onClick={handler}>
              {icon}
            </PrevNextBtn>
          );
        })}
        {/* </ArrowBox> */}
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

const SlideContainer = styled.div`
  margin: 0 auto;
  width: 380px;
  height: 250px;
  /* border-radius: 10px; */
  overflow: hidden;
  border: 1px solid black;
  /* position: relative;
  left: 50%;
  top: 40%; */
  /* transform: translate(-50%, -50%); */
  user-select: none;
  -webkit-user-select: none;
`;

const SlideBox = styled.div`
  display: flex;
  transition: 0.2s;
  & img {
    width: 380px;
    height: 250px;
    /* border-radius: 5px; */
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
  top: 33%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.2s ease-in;
  &.next {
    position: absolute;
    left: 95%;
    top: 33%;
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
  top: 185px;
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
