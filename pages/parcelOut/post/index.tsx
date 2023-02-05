import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Layout } from "../../../src/components/layout";

type Props = {};

export default function ParcelOutPost(props: Props) {
  return (
    <Container>
      <TopBox>
        <span>분양글 쓰기</span>
        <button>
          <span>올리기</span>
        </button>
      </TopBox>
      <UploadContainer>
        <Image src={require(`src/image/sp-upload.png`)} alt="업로드" />
        {/* <span>{`사진 올리기 \n (최대 10장)`}</span> */}
        <span>사진 올리기 </span>
        <span style={{ fontSize: "13px", color: "gray" }}>(최대 10장)</span>
      </UploadContainer>
      <TitleInput placeholder="제목을 입력해 주세요" />
      <ContentInput placeholder="내용을 입력해 주세요" />
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  /* margin-top: 130px; */
  margin: 130px 35px 0 35px;
  width: 100vw;
  height: 100vh;
  /* margin: 0 20px; */
`;

const TopBox = styled.div`
  /* border: 1px solid black; */
  /* left: 0; */
  display: flex;
  justify-content: space-between;
  /* position: fixed; */
  /* width: 100vw; */
  align-items: center;
  & button {
    width: 67px;
    height: 36px;
    background: #ffbd13;
    border: transparent;
    border-radius: 10px;
    & span {
      font-weight: 600;
      font-size: 18px;
      color: #ffffff;
    }
  }
`;

const UploadContainer = styled.div`
  /* border: 1px solid red; */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 270px;
  background-color: #e9e9e9;
  margin: 15px auto;
  & span {
    white-space: pre-line;
  }
`;

const TitleInput = styled.input`
  box-sizing: border-box;
  /* width: 450px; */
  height: 59px;
  background: #ffffff;
  border: 1px solid #a7a7a7;
  border-radius: 5px;

  text-indent: 10px;
  ::placeholder {
    color: #a7a7a7;
    text-indent: 10px;
  }
  :focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`;

const ContentInput = styled.textarea`
  margin-top: 15px;
  height: 232px;
  background: #ffffff;
  border: 1px solid #a7a7a7;
  border-radius: 5px;
  padding: 10px;
  ::placeholder {
    color: #a7a7a7;
    /* text-indent: 10px; */
    position: absolute;
    top: 20px;
  }
  :focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`;
