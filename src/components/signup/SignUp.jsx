import styled from 'styled-components';

// import Sign
import SignUpHeader from './SignUpHeader';
import SignUpCard from './SignUpCard';

function SignUp() {
  return (
    <SignUpBlock>
      <SignUpHeader />
      <SignUpCard />
    </SignUpBlock>
  );
}

const SignUpBlock = styled.div``;

export default SignUp;
