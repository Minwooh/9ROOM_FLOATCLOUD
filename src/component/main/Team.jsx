import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Member from "./Member";

const Container = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;

  padding: 1rem 1rem;

  border-radius: 1.6rem;
  background: ${(props) => props.bgColor};
`;
const Title = styled.div`
  color: var(--Mono-5, #404040);
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;
const Img = styled.img`
  width: 8.8rem;
  height: 6.4rem;

  margin-top: 1rem;
  margin-left: 1.1rem;
`;
const CloudNum = styled.div`
  position: absolute;
  top: -1.3rem;
  right: -0.6rem;
  width: 2.8rem;
  height: 2.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #3d94f7;
  border-radius: 2rem;

  color: #fafafa;
  font-family: SUIT;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

const SeeMembers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1.8rem;
  height: 1.9rem;
  margin-top: 0.8rem;
`;

const Team = ({ bgColorNum }) => {
  const [mouse, setMouseOver] = useState(false);
  const navigate = useNavigate();

  const IsMouseOver = () => {
    setMouseOver(true);
  };
  const IsMouseOut = () => {
    setMouseOver(false);
  };
  const GoTeamPage = () => {
    navigate("/team");
  };

  const ContainerColor = [
    { num: 0, color: "#C8E6FB" },
    { num: 1, color: "#7DC7FD" },
    { num: 2, color: "#4BB3FE" },
    { num: 3, color: "#0094FF" },
  ];

  return (
    <Container bgColor={ContainerColor[bgColorNum].color}>
      <CloudNum>3</CloudNum>
      <Title>엔터프라이즈 응용</Title>
      <Img src="./images/cloud.png" onClick={GoTeamPage} />
      {mouse && <Member />}
      <SeeMembers onMouseOver={IsMouseOver} onMouseOut={IsMouseOut}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="23"
          viewBox="0 0 17 23"
          fill="none"
        >
          <rect
            x="2.71997"
            width="11.56"
            height="10.8235"
            rx="5.41176"
            fill="#006AB6"
            fill-opacity="0.6"
          />
          <path
            d="M0 19.3235C0 14.6291 3.80558 10.8235 8.5 10.8235V10.8235C13.1944 10.8235 17 14.6291 17 19.3235V23H0V19.3235Z"
            fill="#006AB6"
            fill-opacity="0.6"
          />
        </svg>
      </SeeMembers>
    </Container>
  );
};

export default Team;
