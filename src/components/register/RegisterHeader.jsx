import styled from 'styled-components';

import { Link } from 'react-router-dom';

function RegisterHeader() {
  return (
    <RegisterHeaderBlock>
      <ReigsterLogo to="/">NEXToon</ReigsterLogo>
      <RegisterLink to="/login">로그인</RegisterLink>
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

const ReigsterLogo = styled(Link)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #e50914;
  text-decoration: none;
`;

const RegisterLink = styled(Link)`
  font-size: 1.5rem;
  color: black;
  text-decoration: none;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default RegisterHeader;
