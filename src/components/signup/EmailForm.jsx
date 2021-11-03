import styled from 'styled-components';

import EmailInputForm from './EmailInputForm';

function EmailForm() {
  return (
    <EmailFormBlock>
      <EmailFormTitle>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
        입력하세요.
      </EmailFormTitle>
      <EmailInputForm />
    </EmailFormBlock>
  );
}

const EmailFormBlock = styled.div`
  max-width: 950px;
  padding-top: 0.85rem;
`;

const EmailFormTitle = styled.h3``;

export default EmailForm;
