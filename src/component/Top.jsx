import { useState } from "react";
import styled from "styled-components";

const TopBox = styled.div`
  position: relative;
  display: flex;
  padding: 1.5rem 1.4rem;

  margin-bottom: 3rem;

  height: 2rem;
  justify-content: space-between;
`;
const WhiteContainer = styled.div`
  position: absolute;
  width: 16rem;
  height: 18rem;

  z-index: 1;

  top: 4.4rem;
  right: 4.6rem;

  padding: 0.4rem 1.5rem;

  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 6px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;
const AlarmContainer = styled.div`
  height: 14rem;
  overflow-y: auto;
`;
const Alarm = styled.div`
  width: 100%;

  color: var(--Mono-7, #131313);
  font-family: Abel;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Content = styled.div`
  color: var(--Mono-5, #404040);
  font-family: Abel;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const Top = () => {
  const [mouse, setMouse] = useState(false);

  const IsMouseOver = () => {
    setMouse(true);
  };
  const IsMouseOut = () => {
    setMouse(false);
  };

  return (
    <TopBox>
      <img src="../images/logo.png" alt="logo" />
      <span>
        <img
          src="../images/alarm.png"
          alt="알람"
          width="40rem"
          style={{ marginRight: "0.6rem" }}
          onMouseOver={IsMouseOver}
          onMouseOut={IsMouseOut}
        />
        <img src="../images/setting.png" alt="세팅" width="40rem" />
      </span>
      {mouse && (
        <WhiteContainer>
          <p style={{ marginBottom: "1.6rem" }}>새로운 알림</p>
          <AlarmContainer>
            <Alarm>
              <span>디자인 리서치</span> - <span>내 구름에 타래</span>
              <Content>인터랙션 새로 추가해야 할 것 같아요 이부분은!</Content>
              <hr />
            </Alarm>
            <Alarm>
              <span>디자인 리서치</span> - <span>내 구름에 타래</span>
              <Content>인터랙션 새로 추가해야 할 것 같아요 이부분은!</Content>
              <hr />
            </Alarm>
            <Alarm>
              <span>디자인 리서치</span> - <span>내 구름에 타래</span>
              <Content>인터랙션 새로 추가해야 할 것 같아요 이부분은!</Content>
              <hr />
            </Alarm>
            <Alarm>
              <span>디자인 리서치</span> - <span>내 구름에 타래</span>
              <Content>인터랙션 새로 추가해야 할 것 같아요 이부분은!</Content>
              <hr />
            </Alarm>
            <Alarm>
              <span>디자인 리서치</span> - <span>내 구름에 타래</span>
              <Content>인터랙션 새로 추가해야 할 것 같아요 이부분은!</Content>
              <hr />
            </Alarm>
          </AlarmContainer>
        </WhiteContainer>
      )}
    </TopBox>
  );
};

export default Top;
