import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setEmailAddress } from '../../store/actions/authActions';

function EmailInputForm() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEmailFocus, setIsEmailFocus] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onClick = () => {
    if (validateEmail(email)) {
      dispatch(setEmailAddress(email));
      history.push('/register');
    }
  };

  const onFocus = () => {
    setIsEmailFocus(true);
  };

  const onBlur = () => {
    validateEmail(email);
    !email && setIsEmailFocus(false);
  };

  const validateEmail = (email) => {
    if (email.length < 5) {
      setErrorMessage('이메일 주소를 입력해 주세요.');
      return false;
    } else {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(String(email).toLowerCase())) {
        setErrorMessage('');
        return true;
      } else {
        setErrorMessage('정확한 이메일 주소를 입력하세요.');
        return false;
      }
    }
  };

  return (
    <EmailInputFormBlock>
      <EmailWrapper>
        <EmailInput
          id="email"
          type="email"
          $errorMessage={errorMessage}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        ></EmailInput>
        <EmailLabel htmlFor="email" $isEmailFocus={isEmailFocus}>
          이메일 주소
        </EmailLabel>
        {errorMessage && <EmailError>{errorMessage}</EmailError>}
      </EmailWrapper>
      <EmailButton onClick={onClick}>시작하기</EmailButton>
    </EmailInputFormBlock>
  );
}

const EmailInputFormBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const EmailWrapper = styled.div`
  position: relative;
`;

const EmailInput = styled.input`
  width: 500px;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-bottom: ${(props) => props.$errorMessage && '2px solid #ffa00a'};
  font-size: px;

  :focus {
    outline: none;
  }
`;

const EmailLabel = styled.label`
  position: absolute;
  color: #8c8c8c;
  left: 10px;

  top: ${(props) => (props.$isEmailFocus ? '4px' : '20px')};
  font-size: ${(props) => (props.$isEmailFocus ? '12px' : '16px')};

  transition: all 0.2s ease;
`;

const EmailError = styled.div`
  position: absolute;
  color: #ffa00a;
  padding: 8px 4px;
`;

const EmailButton = styled.button`
  background-color: #e50914;
  color: white;
  font-size: 1.5rem;
  padding: 0 30px;
  border: none;
  width: 160px;
  height: 70px;
  box-sizing: border-box;

  :hover {
    cursor: pointer;
    background-color: #f50c18;
  }
`;

export default EmailInputForm;
