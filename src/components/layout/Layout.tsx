import { Header } from "./header/Header";
import MenuBar from "./menuBar/MenuBar";
import styled from "styled-components";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <MenuBar />
      {children}
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  z-index: 10;
  background-color: white;
  margin: 0 auto;
  max-width: 100vw;
  height: 100%;
  transition: 0.3s;
`;
