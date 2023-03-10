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
  // console.log(tabIndex);
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
        return <TabBox key={item.key}>{item.tab}</TabBox>;
      })}
    </MenuBarContainer>
  );
}
export default MenuBar;

const MenuBarContainer = styled.div`
  /* border: 1px solid black; */
  background-color: white;
  position: fixed;
  top: 60px;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
  padding: 10px 0;
`;

const TabBox = styled.div`
  /* border: 1px solid black; */
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
