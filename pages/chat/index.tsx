import styled from "styled-components";
import Image from "next/image";
import { ChatRoom } from "../../src/components/chat/ChatRoom";
import { useState } from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";

export default function Chat() {
  let sample = {
    id: 1,
    roomId: 12,
    avatar: "",
    userName: "누구누구사장님",
    lastContent: "분양하싈?",
    lastMsgTime: new Date(),
  };
  let arrEx = Array.from({ length: 20 }, () => sample);

  const [openChatRoom, setOpenChatRoom] = useState<number>(-1);

  const openRoom = (index: number) => {
    setOpenChatRoom(index);
  };
  const closeRoom = () => {
    setOpenChatRoom(-1);
  };
  console.log(openChatRoom);
  return (
    <Container>
      {arrEx.map((item, index) => {
        const { userName, lastContent, lastMsgTime } = item;
        const HOUR = lastMsgTime.getHours();
        const MINUTES = lastMsgTime.getMinutes();
        const AMPM = HOUR < 12 ? "오전" : "오후";
        return (
          <Card key={index} onClick={() => openRoom(index)}>
            <Image
              src={`https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcUliu4%2FbtrCY7tLpOi%2FN4XWqMAanZTpSzOoCqykJK%2Ftfile.svg`}
              width={60}
              height={60}
              alt="avatar"
            />
            <UserInfo>
              <div>{userName}</div>
              <span>{lastContent}</span>
            </UserInfo>
            <CardFooter>
              <span>{`${AMPM} ${HOUR}:${MINUTES}`}</span>
            </CardFooter>
            <ChatRoom
              key={`-${index}`}
              isOpen={index === openChatRoom}
              closeRoom={closeRoom}
            />
          </Card>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  margin: 80px 0 80px 0;
`;

const Card = styled.div`
  margin-bottom: 3px;
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;

  & img {
    margin-right: 10px;
    border-radius: 50px;
  }
`;

const UserInfo = styled.div`
  width: 70vw;
  font-size: 1rem;
  font-weight: bold;

  & span {
    font-size: 0.8rem;
    font-weight: normal;
    color: gray;
  }
`;

const CardFooter = styled.div`
  height: 80px;
  & span {
    font-size: 0.6rem;
    color: gray;
  }
`;
