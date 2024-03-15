import styled from "styled-components";
import Top from "../../component/Top";
import Team from "../../component/main/Team";
import ButtonContainer from "../../component/main/ButtonContainer";

const Wrap = styled.div`
  min-width: 70rem;
`;

const Container = styled.div`
  position: relative;
  width: 60rem;
  height: 70rem;
  flex-shrink: 0;

  margin: 0rem auto;
  padding: 3rem 1.5rem;

  border-radius: 3.1rem;

  background: var(--Blue-20, rgba(40, 100, 255, 0.2));

  #text {
    color: var(--Mono-5, #404040);
    font-family: SUIT;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;

    margin-top: 1.5rem;
  }
`;

const Intro = styled.section`
  height: 5rem;
  width: 100%;

  color: var(--Mono-5, #303030);
  font-family: SUIT;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const TeamsBox = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1.9rem 1.3rem;

  width: 100%;
  margin-top: 0.2rem;
`;
const MainPage = () => {
  return (
    <Wrap>
      <Top />
      <Container>
        <Intro>
          반가워요, 구르미님!
          <br /> 오늘도 힘차게 새로운 구름을 띄워봐요.
        </Intro>
        <ButtonContainer />
        <div id="text">참여하는 팀</div>
        <TeamsBox>
          <Team bgColorNum={0} />
          <Team bgColorNum={1} />
          <Team bgColorNum={2} />
          <Team bgColorNum={3} />
        </TeamsBox>
      </Container>
    </Wrap>
  );
};

export default MainPage;
