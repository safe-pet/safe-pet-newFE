import { Header } from "./header/Header";
import MenuBar from "./menuBar/MenuBar";
import styled from "styled-components";
import { Footer } from "./footer/Footer";
import { useRouter } from "next/router";

export const Layout = ({ children }: any) => {
  const { pathname } = useRouter();

  return (
    <LayoutContainer>
      {children}
      {pathname === "/login" ? null : (
        <>
          <Header />
          <MenuBar />
          <Footer />
        </>
      )}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: white;
  margin: 0 auto;
  max-width: 100vw;
  height: 100%;
  transition: 0.3s;
`;
