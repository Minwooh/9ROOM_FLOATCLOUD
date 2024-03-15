import styled from "styled-components";

const MemberContainer = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 1;
  width: 10.3rem;
  max-height: 16rem;

  top: 11.4rem;
  left: 1.3rem;

  padding: 1rem 1rem;

  border-radius: 20px;
  opacity: 0.8;
  background: var(--White, #fafafa);
`;

const MemberInfo = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 2.5rem;
  margin-top: 0.6rem;

  color: var(--Mono-5, #404040);
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
const Img = styled.div`
  width: 2.3em;
  height: 2.3rem;
  border-radius: 5rem;

  background-color: #888;
`;

const Name = styled.div`
  margin-left: 0.6rem;
`;
const Role = styled.div`
  margin-left: 2.7rem;
`;

const Member = () => {
  return (
    <MemberContainer>
      멤버 목록(6)
      <MemberInfo>
        <Img />
        <Name>홍민우</Name>
        <Role>팀장</Role>
      </MemberInfo>
      <MemberInfo>
        <Img />
        <Name>홍민우</Name>
        <Role>팀장</Role>
      </MemberInfo>
    </MemberContainer>
  );
};

export default Member;
