import styled from "styled-components";
import Image from "next/image";

interface ChildProps {
  size: number; // width & height
  onClick: () => void;
}

export const EditBtn = ({ size, onClick }: ChildProps) => {
  return (
    <ImageWrap
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Image
        src={require("../image/sp-pencil.png")}
        alt="수정버튼"
        width={size}
        height={size}
        onClick={onClick}
      />
    </ImageWrap>
  );
};

const ImageWrap = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 50%;
  background-color: #fff455;
`;
