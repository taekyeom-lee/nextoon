import styled from 'styled-components';
import GoogleForm from './GoogleForm';
import LoginSignupNow from './LoginSignupNow';
import RecaptchaTermsOfUse from './RecaptchaTermsOfUse';

function LoginFormOther() {
  return (
    <LoginFormOtherBlock>
      <GoogleForm />
      <LoginSignupNow />
      <RecaptchaTermsOfUse />
    </LoginFormOtherBlock>
  );
}

// login-form-other
const LoginFormOtherBlock = styled.div``;

export default LoginFormOther;
