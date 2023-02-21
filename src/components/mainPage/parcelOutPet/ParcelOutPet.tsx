import styled from "styled-components";
import Image from "next/image";

export const ParcelOutPet = () => {
  let testArr = Array.from({ length: 20 }, () => {
    0;
  });
  return (
    <Container>
      <ContentWrap>
        <p>New Friends</p>
      </ContentWrap>
      <PostGrid>
        {testArr.map((item, index) => {
          return (
            <PostCardWrap key={index}>
              <Image
                width={300}
                height={300}
                src={require("../../../image/sp-dummy1.png")}
                alt="썸네일"
                unoptimized
              />
              <PostInfo>
                <Image
                  width={50}
                  height={50}
                  src={`https://source.boringavatars.com/beam/110/$1?colors=DF9E75,A9653B,412513,412510,412500`}
                  alt="프로필이미지"
                  unoptimized
                />
                <p>
                  호창쓰<span> / 네발바닥냥카페</span>
                </p>
                <span>서울</span>
                <span>남 / 30대</span>
              </PostInfo>
            </PostCardWrap>
          );
        })}
      </PostGrid>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentWrap = styled.div`
  display: flex;
  & p {
    width: 90vw;
    font-size: 30px;
    font-weight: bold;
  }
`;

const PostGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const PostCardWrap = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
`;

const PostInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 70vw;

  & span {
    color: gray;
    font-size: 14px;
  }
`;
