import styled from 'styled-components';

import RegisterForm from './RegisterForm';
import RegisterHeader from './RegisterHeader';

function Register() {
  return (
    <RegisterBlock>
      <RegisterHeader />
      <Hr />
      <RegisterForm />
    </RegisterBlock>
  );
}

const RegisterBlock = styled.div`
  background: white;
  color: black;
  min-height: 100vh;
`;

const Hr = styled.hr`
  border: 1px solid #e6e6e6;
`;

export default Register;
