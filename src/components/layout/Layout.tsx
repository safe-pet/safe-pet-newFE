import { Header } from "./Header";
import MenuBar from "./menuBar/MenuBar";
import styled from "styled-components";

export const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <MenuBar />
      {children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  background-color: white;
  margin: 0 auto;
  max-width: 100vw;
  height: 100%;
  transition: 0.3s;
`;
