import styled from 'styled-components';

import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';

function Login() {
  return (
    <LoginBlock>
      <LoginHeader />
      <LoginBody>
        <LoginForm />
      </LoginBody>
      <LoginFooter></LoginFooter>
    </LoginBlock>
  );
}

const LoginBlock = styled.div``;

const LoginBody = styled.div`
  margin: 0 auto -236px;
  min-height: 100vh;
  max-width: 450px;

  ::before {
    content: '';
    height: 91px;
    display: block;
  }
`;
const LoginFooter = styled.div``;

export default Login;
