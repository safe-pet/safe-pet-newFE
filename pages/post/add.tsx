import styled from "styled-components";
import Image from "next/image";

export default function AddPost() {
  return (
    <Container>
      <p>분양글 작성</p>
      <FileInput>
        <label htmlFor="imageInput">
          <Image
            src={require("../../src/image/sp-camera.png")}
            alt="사진 업로드"
            width="80"
          />
          <span>사진 선택</span>
          <span>(최대 5장)</span>
        </label>
        <input type="file" name="imageInput" id="imageInput" />
      </FileInput>
      <ContentWrap>
        <input type="text" name="title" placeholder="제목" />
        <textarea name="content" placeholder="내용"></textarea>
      </ContentWrap>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 150px;
  width: 95vw;
`;

const FileInput = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ffbd13;
  border-radius: 15px;
  & input {
    display: none;
  }
  & label {
    width: 95vw;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & span {
      font-size: 18px;
      font-weight: bold;
      &:last-child {
        color: gray;
        font-size: 14px;
      }
    }
  }
`;

const ContentWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;

  & input {
    margin-bottom: 15px;
    height: 45px;
    font-size: 1.4rem;
    border: 1px solid #ffbd13;
    border-radius: 10px;
    outline-color: #ffbd13;
  }
  & textarea {
    padding: 5px;
    height: 180px;
    font-size: 1.2rem;
    border: 1px solid #ffbd13;
    border-radius: 10px;
    outline-color: #ffbd13;
    resize: none;
  }
`;
