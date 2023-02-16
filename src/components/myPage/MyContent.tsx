import { useState } from "react";
import styled from "styled-components";
import { ContentBody } from "./ContentBody";

export const MyContent = () => {
  const [selectNum, setSelectNum] = useState<number>(0);
  const contentArr = ["게시글", "커뮤니티", "스크랩"];

  return (
    <>
      <UserContent>
        {contentArr.map((item, index) => {
          return (
            <ContentItem
              key={index}
              onClick={() => setSelectNum(index)}
              style={{ color: selectNum === index ? "#ffbd13" : "#a7a7a7" }}
            >
              {item}
            </ContentItem>
          );
        })}
      </UserContent>
      <Hr />
      <ContentBody />
    </>
  );
};

const UserContent = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const ContentItem = styled.span`
  margin: 0 10px 0 10px;
  width: 100px;
  text-align: center;
  color: #a7a7a7;
  font-size: 1.2rem;
  transition: 0.5s;
`;

const Hr = styled.hr`
  border: none;
  border-top: 2px solid lightgray;
`;
