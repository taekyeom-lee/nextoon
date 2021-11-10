import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SignUpHeader() {
  return (
    <SignUpHeaderBlock>
      <SignUpLogo to="/">NEXToon</SignUpLogo>
      <SignUpButton to="/login">로그인</SignUpButton>
    </SignUpHeaderBlock>
  );
}

const SignUpHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  // padding-top: 0.5rem;
  margin: 0 3.5rem;
`;

const SignUpLogo = styled(Link)`
  font-size: 2.5rem;
  font-weight: 600;
  color: #e50914;
  text-decoration: none;
`;

const SignUpButton = styled(Link)`
  background-color: #e50914;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  padding: 8px 20px;
  border-radius: 4px;
`;

export default SignUpHeader;
