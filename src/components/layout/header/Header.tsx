import Image from "next/image";
import styled from "styled-components";
import { Search } from "./Search";

export const Header = () => {
  return (
    <HeaderContainer>
      <h1>SAFE PET</h1>
      <Search />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  height: min-content;
  border-bottom: 1px solid #d6d2d2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  /* padding: 20px 30px 15px 30px; */
  & h1 {
    padding-left: 25px;
    font-size: 28px;
    font-weight: 350;
    height: max-content;
  }
`;
