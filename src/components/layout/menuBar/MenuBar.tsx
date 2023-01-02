import React from "react";
import styled from "styled-components";

function MenuBar() {
  //함수형으로 만들기
  // function menuTab(menu: { key: string; tab: any }): {
  //   key: string;
  //   tab: number;
  // };
  // function menuTab(menu: any): any {
  //   return menu;
  // }
  // console.log(
  //   menuTab({
  //     key: "분양받기",
  //     tab: (
  //       <span
  //       // className={tabIndex === 0 ? "select" : ""}
  //       // onClick={listHandler}
  //       >
  //         목록
  //       </span>
  //     ),
  //   }),
  // );

  //class 만들기
  // class MenuTab {
  //   key;
  //   tab;
  //   constructor(key: string, tab: any) {
  //     this.key = key;
  //     this.tab = (
  //       <span
  //       // className={tabIndex === 0 ? "select" : ""}
  //       // onClick={listHandler}
  //       >
  //         ${tab}
  //       </span>
  //     );
  //   }
  // }
  // const tab1: MenuTab = new MenuTab("분양받기", "분양받기");
  // const tab2: MenuTab = new MenuTab("커뮤니티", "커뮤니티");
  // const tab3: MenuTab = new MenuTab("기타", "기타");
  // const tab4: MenuTab = new MenuTab("사이트 소개", "사이트 소개");
  // console.log(tab1, tab2, tab3, tab4);

  // let list = new menu(key:"jeongwon", tab:"hi")
  // const tabArray = [
  //   {
  //     key: "list",
  //     tab: (
  //       <StyledTab
  //         className={tabIndex === 0 ? "select" : ""}
  //         onClick={listHandler}
  //       >
  //         목록
  //       </StyledTab>
  //     ),
  //   },
  //   {
  //     key: "pending",
  //     tab: (
  //       <StyledTab
  //         className={tabIndex === 1 ? "select" : ""}
  //         onClick={pendingHandler}
  //       >
  //         대기중
  //       </StyledTab>
  //     ),
  //   },
  //   {
  //     key: "confirm",
  //     tab: (
  //       <StyledTab
  //         className={tabIndex === 2 ? "select" : ""}
  //         onClick={confirmRentalHandler}
  //       >
  //         렌탈확정
  //       </StyledTab>
  //     ),
  //   },
  //   {
  //     key: "overDeadline",
  //     tab: (
  //       <StyledTab
  //         className={tabIndex === 3 ? "select" : ""}
  //         onClick={overDeadlineHandler}
  //       >
  //         기한마감
  //       </StyledTab>
  //     ),
  //   },
  // ];
  return (
    <MenuBarContainer>
      {/* {tabArray.map(item => {
        return <div key={item.key}>{item.tab}</div>;
      })} */}
      <span>분양받기</span>
      <span>커뮤니티</span>
      <span>기타</span>
      <span>사이트 소개</span>
    </MenuBarContainer>
  );
}
const MenuBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;
export default MenuBar;
