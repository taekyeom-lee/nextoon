import styled from 'styled-components';
import LoginFormMain from './LoginFormMain';
import LoginFormOther from './LoginFormOther';

function LoginForm() {
  return (
    <LoginFormBlock>
      <LoginFormMain />
      <LoginFormOther />
    </LoginFormBlock>
  );
}

const LoginFormBlock = styled.div`
  min-height: 625px;
  padding: 60px 68px 40px;
  margin-bottom: 90px;
  background-color: rgba(0, 0, 0, 0.75);
`;

export default LoginForm;
