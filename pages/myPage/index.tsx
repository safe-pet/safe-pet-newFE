import styled from "styled-components";
import Image from "next/image";
import { baseImageData } from "../../src/utils/baseImage";

export default function MyPage() {
  return (
    <Container>
      <ItemWrap>
        <Profile>
          <Image
            src={`${baseImageData(1)}`}
            width={200}
            height={200}
            alt="프로필 이미지"
            unoptimized
          />
          <span>수정버튼</span>
        </Profile>
      </ItemWrap>
      <ItemWrap>
        <span>닉네임</span>
        <span>수정버튼</span>
      </ItemWrap>
      <UserAct>
        <span>내 게시글</span>
        <span>내 커뮤니티</span>
      </UserAct>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 150px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const UserAct = styled.div`
  margin-top: 50px;
`;
