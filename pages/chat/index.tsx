import styled from "styled-components";
import { baseImageData } from "../../src/utils/baseImage";
import Image from "next/image";

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
  console.log(arrEx);

  return (
    <Container>
      {arrEx.map((item, index) => {
        const { userName, lastContent, lastMsgTime } = item;
        let hour = lastMsgTime.getHours();
        let minutes = lastMsgTime.getMinutes();
        let AMPM = hour < 12 ? "오전" : "오후";
        return (
          <Card key={index}>
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
              <span>{`${AMPM} ${hour}:${minutes}`}</span>
            </CardFooter>
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
