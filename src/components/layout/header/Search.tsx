import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Modal } from "../../../utils/Modal";

export const Search = () => {
  const [submitData, setSubmitData] = useState("");
  const [keyword, setKeyword] = useState<string | any>("");

  const onInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const content = event.target.value;
    // setKeyword({ ...inputTodo, todo: content });
    // setTodo(content);
  };

  const modalContent = () => {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="inputSearch"></label>
        <input
          id="inputSearch"
          type="text"
          // style={{ display: "none" }} // 기본 이미지는 못생겼으니 숨기고 label로 style 주기
          onChange={onInputHandler}
        />
        {/* <button type="button" onClick={(e) => setSubmitData(e.target.value)}>
          사진 업로드
        </button> */}
      </form>
    );
  };
  const modal = Modal();
  return (
    <>
      {modal.ismodal ? (
        <modal.ModalView>{modalContent()}</modal.ModalView>
      ) : (
        <SearchBox>
          <Image
            width={25}
            src={require("src/image/sp-search.png")}
            alt="검색"
            onClick={modal.onHander}
          />
        </SearchBox>
      )}
    </>
  );
};

const SearchBox = styled.div``;
const SearchInput = styled.input`
  border: transparent;
  color: #b7bdc6;
  background-color: transparent;
`;
