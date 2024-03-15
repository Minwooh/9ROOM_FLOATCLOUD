import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 28rem;
  height: 33rem;

  margin: 0rem auto;
  padding: 3rem 1rem 0rem 1rem;

  border-radius: 20px;
  opacity: 0.7;
  background: var(--Blue-70, rgba(40, 100, 255, 0.7));
`;
const Text = styled.div`
  color: var(--White, #fafafa);
  font-family: Abel;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`;
const AddIcon = styled.div`
  display: inline-block;
  overflow: auto;
  width: 13rem;
  height: 13rem;
  z-index: 0;
  border-radius: 2rem;
  opacity: 0.7;
  background: var(--White, #fafafa);
`;
const AddTeamName = styled.input`
  width: 14rem;
  height: 1.1rem;

  padding: 1rem 1rem;
  margin-top: -2rem;
  text-align: center;

  border: none;
  border-radius: 1rem;
  background: var(--White, #fafafa);

  :placeholder {
    color: var(--Mono-2, #b2b2b2);
    font-family: Abel;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
  }
`;
const NextBtn = styled.button`
  width: 26rem;
  height: 2.4rem;

  border-radius: 0.8rem;
  border: none;
  background: rgba(40, 100, 255);
`;

const IconsContainer = styled.div`
  position: absolute;
  width: 22rem;
  height: 18rem;
  padding: 2rem 2rem;

  border-radius: 20px;
  background: var(--White, #fafafa);

  img {
    width: 5rem;
    height: 5rem;
  }
`;

const AddNewTeam = () => {
  const [addIcon, setAddIcon] = useState(false);
  const [selectIcon, setSelectIcon] = useState(null);

  const IsAddIconBtn = () => {
    setAddIcon(true);
  };
  const SelectIcon = (src) => {
    setAddIcon(false);
    setSelectIcon(src);
  };

  const ImgData = [
    { index: 0, src: "./images/0.png" },
    { index: 1, src: "./images/1.png" },
    { index: 2, src: "./images/2.png" },
    { index: 3, src: "./images/3.png" },
    { index: 4, src: "./images/4.png" },
    { index: 5, src: "./images/5.png" },
    { index: 6, src: "./images/6.png" },
    { index: 7, src: "./images/7.png" },
    { index: 8, src: "./images/8.png" },
    { index: 9, src: "./images/9.png" },
    { index: 10, src: "./images/10.png" },
    { index: 11, src: "./images/11.png" },
  ];

  return (
    <div
      style={{
        zIndex: "1",
        backgroundColor: "#fff",

        width: "100%",
        height: "70rem",
        position: "absolute",
        top: "0rem",
        left: "0rem",
      }}
    >
      <Container>
        <Text>새로운 팀 만들기</Text>
        <AddIcon onClick={IsAddIconBtn}>
          {selectIcon && <img src={selectIcon} width="100%" height="100%" />}
        </AddIcon>
        {addIcon && (
          <IconsContainer>
            팀 아이콘 선택
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                marginTop: "1rem",
              }}
            >
              {ImgData.map((data) => (
                <img src={data.src} onClick={() => SelectIcon(data.src)} />
              ))}
            </div>
          </IconsContainer>
        )}
        <AddTeamName placeholder="팀 이름을 입력하세요" />
        <NextBtn>다음</NextBtn>
      </Container>
    </div>
  );
};

export default AddNewTeam;
