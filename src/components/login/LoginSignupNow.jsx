import styled from 'styled-components';

function LoginSignupNow() {
  return (
    <LoginSignupNowBlock>
      NEXToon 회원이 아닌가요?
      <LoginSignupNowLink>지금 가입하세요</LoginSignupNowLink>.
    </LoginSignupNowBlock>
  );
}

// login-signup-now
const LoginSignupNowBlock = styled.div`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
`;

const LoginSignupNowLink = styled.a`
  color: white;
  margin-left: 4px;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default LoginSignupNow;
