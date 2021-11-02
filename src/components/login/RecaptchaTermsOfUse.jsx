import styled from 'styled-components';

function RecaptchaTermsOfUse() {
  return (
    <RecaptchaTermsOfUseBlock>
      <p>
        <span>
          이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
          확인합니다.
        </span>
        &nbsp;
        <RecaptchaTermsOfUseLinkButton>
          자세히 알아보기
        </RecaptchaTermsOfUseLinkButton>
      </p>
    </RecaptchaTermsOfUseBlock>
  );
}

// recaptcha-terms-of-use
const RecaptchaTermsOfUseBlock = styled.div`
  margin-top: 11px;
  font-size: 13px;
  color: #8c8c8c;
`;

// recaptcha-terms-of-use--link-button
const RecaptchaTermsOfUseLinkButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  // display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;

  :hover {
    text-decoration: underline;
  }
`;

export default RecaptchaTermsOfUse;
