import styled from 'styled-components';

import EmailForm from './EmailForm';

function SignUpCard() {
  return (
    <SignUpCardBlock>
      <SignUpCardText>
        <SignUpCardTitle>웹툰, 소설을 무제한으로.</SignUpCardTitle>
        <SignUpCardSubtitle>
          다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
        </SignUpCardSubtitle>
        <EmailForm />
      </SignUpCardText>
    </SignUpCardBlock>
  );
}

const SignUpCardBlock = styled.div`
  padding: 70px 45px;
  border-bottom: 8px solid #222;
`;

const SignUpCardText = styled.div`
  padding: 75px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
`;

const SignUpCardTitle = styled.h1``;

const SignUpCardSubtitle = styled.h2``;

export default SignUpCard;
