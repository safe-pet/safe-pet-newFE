import styled from "styled-components";
import Image from "next/image";

export const ParcelOutPet = () => {
  return (
    <Container>
      <ContentWrap>
        <p>New Friends</p>
      </ContentWrap>
      <PostGrid>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy1.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              호창쓰<span> / 네발바닥냥카페</span>
            </p>
            <span>서울</span>
            <span>남 / 30대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy3.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              호창쓰<span> / 네발바닥냥카페</span>
            </p>
            <span>지역</span>
            <span>남 / 30대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy2.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy1.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy3.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy2.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy1.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy3.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy1.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy1.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
        <PostCardWrap>
          <Image
            width={300}
            height={300}
            src={require("../../../image/sp-dummy1.png")}
            alt="썸네일"
            unoptimized
          />
          <PostInfo>
            <p>
              닉네임<span> / 사업자 상호명</span>
            </p>
            <span>지역</span>
            <span>성별 / 연령대</span>
          </PostInfo>
        </PostCardWrap>
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
  margin: 30px 0 30px 0;
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
