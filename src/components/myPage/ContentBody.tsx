import styled from "styled-components";

export const ContentBody = () => {
  const lenArr = Array.from({ length: 150 }, (i, index) => {
    return index;
  });

  return (
    <Container>
      {lenArr.map((item, index) => {
        return (
          <Card key={index}>
            <div>제목</div>
            <p>
              내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
            </p>
          </Card>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  padding-bottom: 100px;
`;

const Card = styled.div`
  margin: 15px 0 15px 0;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  height: 100px;
  overflow-y: hidden;
`;
