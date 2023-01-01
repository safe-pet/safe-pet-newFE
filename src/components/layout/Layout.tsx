import Header from "./Header";
import MenuBar from "./MenuBar";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <MenuBar />
      {children}
      <div>Layout</div>
    </>
  );
};
