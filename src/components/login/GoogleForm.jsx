import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';

function GoogleForm() {
  return (
    <GoogleFormBlock>
      <GgBtn>
        <GgLogin>
          <GgIcon />
          <GgBtnText>Google로 로그인</GgBtnText>
        </GgLogin>
      </GgBtn>
    </GoogleFormBlock>
  );
}

// facebookForm
const GoogleFormBlock = styled.div``;

const GgBtn = styled.button`
  margin-top: 16px;
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
`;

// fb-login
const GgLogin = styled.div``;

// icon-facebook
const GgIcon = styled(FcGoogle)`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  vertical-align: middle;
`;

// fbBtnText
const GgBtnText = styled.span`
  color: #737373;
  font-size: 13px;
  font-weight: 500;
`;
export default GoogleForm;
