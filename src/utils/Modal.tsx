import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export const Modal = () => {
  //정보 수정 모달 창
  const [ismodal, setisModal] = useState(false);

  //클릭하면 모달 창이 열린다.
  const openHandler = (e: any) => {
    e.preventDefault();
    setisModal(true);
  };

  const closeModal = () => {
    setisModal(false);
  };
  const ModalView = ({ children }: any) => {
    return (
      <STModalBackground
        // isModal={modal}
        onClick={closeModal}
      >
        <STModalContainer
          onClick={e => e.stopPropagation()}
          // style={{width:width, height:height}}
        >
          {children}
        </STModalContainer>
      </STModalBackground>
    );
  };
  return {
    ismodal,
    ModalView,
    onHander: openHandler,
  };
};

const STModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const STModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 25px; */
  width: 80vw;
  height: 50vh;
  position: fixed;
  top: 90px;
  left: 50px;
  background-color: white;
`;
