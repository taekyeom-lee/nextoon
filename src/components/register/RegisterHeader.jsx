import styled from 'styled-components';

function RegisterHeader() {
  return (
    <RegisterHeaderBlock>
      <ReigsterLogo>NEXToon</ReigsterLogo>
      <RegisterLink>로그인</RegisterLink>
    </RegisterHeaderBlock>
  );
}

const RegisterHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  // padding-top: 0.5rem;
  margin: 0 3.5rem;
`;

const ReigsterLogo = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: #e50914;

  :hover {
    cursor: pointer;
  }
`;

const RegisterLink = styled.a`
  font-size: 1.5rem;
  color: black;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default RegisterHeader;
