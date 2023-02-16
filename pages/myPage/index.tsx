import styled from "styled-components";
import Image from "next/image";
import { baseImageData } from "../../src/utils/baseImage";
import { EditBtn } from "../../src/utils/EeditButton";
import { MyContent } from "../../src/components/myPage/MyContent";

export default function MyPage() {
  return (
    <Container>
      <ItemWrap>
        <Profile>
          <Image
            src={`${baseImageData(1)}`}
            width={150}
            height={150}
            alt="프로필 이미지"
            unoptimized
            priority
          />
          <EditBtn
            size={30}
            onClick={() => {
              console.log("ㅎㅇ");
            }}
          />
        </Profile>
      </ItemWrap>
      <ItemWrap>
        <Title>
          <p>닉네임뿌우뿌우</p>
          <EditBtn
            size={20}
            onClick={() => {
              console.log("ㅎㅇ");
            }}
          />
        </Title>
      </ItemWrap>
      <Location>
        <span>서울 어딘가</span>
        <EditBtn
          size={20}
          onClick={() => {
            console.log("ㅎㅇ");
          }}
        />
      </Location>
      <MyContent />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 150px;
  width: 80vw;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    position: relative;
    bottom: 35px;
    left: 115px;
  }
`;

const ItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    margin: 0;
    font-size: 1.2rem;
  }
  & span:last-child {
    color: gray;
    font-size: 0.9rem;
  }
`;

const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & span:first-child {
    color: gray;
    font-size: 0.9rem;
  }
`;
