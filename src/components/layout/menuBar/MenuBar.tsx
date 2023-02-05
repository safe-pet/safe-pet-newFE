import React, { useState } from "react";
import styled from "styled-components";

function MenuBar() {
  const [tabIndex, setTabIndex] = useState<number | any>(1);

  class MenuTab {
    key;
    tab;
    constructor(key: string, tab: any, index: number, handler: any) {
      this.key = key;
      this.tab = (
        <TabName
          className={index === tabIndex ? "select" : ""}
          onClick={handler}
        >
          {tab}
        </TabName>
      );
    }
  }

  const adopHandler = (e: any) => {
    e.preventDefault();
    setTabIndex(1);
  };
  // const adopHandler: eachHander = new eachHander(e,1)
  const communityHandler = (e: any) => {
    e.preventDefault();
    setTabIndex(2);
  };
  const etcHandler = (e: any) => {
    e.preventDefault();
    setTabIndex(3);
  };
  const siteHandler = (e: any) => {
    e.preventDefault();
    setTabIndex(4);
  };
  console.log(tabIndex);
  const tab1: MenuTab = new MenuTab("분양받기", "분양받기", 1, adopHandler);
  const tab2: MenuTab = new MenuTab(
    "커뮤니티",
    "커뮤니티",
    2,
    communityHandler,
  );
  const tab3: MenuTab = new MenuTab("기타", "기타", 3, etcHandler);
  const tab4: MenuTab = new MenuTab(
    "사이트 소개",
    "사이트 소개",
    4,
    siteHandler,
  );
  // console.log(tab1, tab2, tab3, tab4);

  const tabArray = [tab1, tab2, tab3, tab4];

  return (
    <MenuBarContainer>
      {tabArray.map(item => {
        return <div key={item.key}>{item.tab}</div>;
      })}
    </MenuBarContainer>
  );
}
export default MenuBar;

const MenuBarContainer = styled.div`
  position: fixed;
  top: 60px;
  min-width: 480px;
  display: flex;
  justify-content: space-between;
  padding: 25px 30px;
`;
const TabName = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 27px;
  color: #a7a7a7;
  &.select {
    color: #ffbd13;
  }
`;
