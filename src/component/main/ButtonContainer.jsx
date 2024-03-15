import styled from "styled-components";
import { useState } from "react";
import AddNewTeam from "./AddNewTeam";

const ButtonBox = styled.section`
  width: 100%;
  height: 6.4rem;

  margin-top: 1rem;
`;
const AddCloudBtn = styled.button`
  width: 23rem;
  height: 100%;
  flex-shrink: 0;
  margin-right: 0.8rem;

  border-radius: 1.8rem;
  border: none;
  opacity: 0.5;
  background: var(--Skyblue-20, rgba(0, 148, 255, 0.2));
`;
const AddTeamBtn = styled.button`
  width: 36rem;
  height: 100%;
  flex-shrink: 0;

  border-radius: 1.8rem;
  border: none;
  opacity: 0.5;
  background: var(--Blue-20, rgba(40, 100, 255, 0.2));
`;

const ButtonContainer = () => {
  const [TeamClick, setTeamClick] = useState(false);

  const IsTeamButtonClick = () => {
    setTeamClick(true);
  };

  return (
    <>
      <ButtonBox>
        <AddCloudBtn>구름 바로 등록하기</AddCloudBtn>
        <AddTeamBtn onClick={IsTeamButtonClick}>팀 새로 만들기</AddTeamBtn>
      </ButtonBox>
      {TeamClick && <AddNewTeam />}
    </>
  );
};

export default ButtonContainer;
