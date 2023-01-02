import Image from "next/image";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>SAFE PET</h1>
      <Image width={25} src={require("src/image/sp-search.png")} alt="알림" />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  /* border: 1px solid red; */
  border-bottom: 1px solid #d6d2d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  & h1 {
    font-size: 28px;
    font-weight: 350;
  }
`;
