import styled from 'styled-components';

import useLoginForm from '../../hooks/useLoginForm';

import firebase from '../../api/firebase';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginFormMain() {
  const {
    isEmailFocus,
    isPasswordFocus,
    isChecked,
    emailRef,
    passwordRef,
    focusEmailInput,
    blurEmailInput,
    focusPasswordInput,
    blurPasswordInput,
    clickCheckbox,
  } = useLoginForm();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const auth = getAuth(firebase);

  const onClick = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log('user', user);
        history.push('/browse');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
      });
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginFormMainBlock>
      <Title>로그인</Title>
      <Form>
        <LoginFiledContainer>
          <Input
            id="email"
            onFocus={focusEmailInput}
            onBlur={blurEmailInput}
            onChange={onChangeEmail}
            ref={emailRef}
          />
          <EmailLabel htmlFor="email" $isEmailFocus={isEmailFocus}>
            이메일 주소
          </EmailLabel>
          <InputError>정확한 이메일 주소를 입력하세요.</InputError>
        </LoginFiledContainer>
        <LoginFiledContainer>
          <Input
            id="password"
            onFocus={focusPasswordInput}
            onBlur={blurPasswordInput}
            onChange={onChangePassword}
            ref={passwordRef}
          />
          <PasswordLabel htmlFor="password" $isPasswordFocus={isPasswordFocus}>
            비밀번호
          </PasswordLabel>
          <InputError>비밀번호는 4 - 60자 사이여야 합니다.</InputError>
        </LoginFiledContainer>
        <Button onClick={onClick}>로그인</Button>
        <LoginFormHelp>
          <HelpRemember>
            <RememberCheckbox
              id="remember"
              type="checkbox"
              onClick={clickCheckbox}
            />
            <RememberText htmlFor="remember" $isChecked={isChecked}>
              로그인 정보 저장
            </RememberText>
          </HelpRemember>
          <HelpLink>도움이 필요하신가요?</HelpLink>
        </LoginFormHelp>
      </Form>
    </LoginFormMainBlock>
  );
}

const LoginFormMainBlock = styled.div`
  // position: relative;
`;

const Title = styled.h1`
  margin: 0 0 28px 0;
`;

const Form = styled.form`
  // position: relative;
`;

const LoginFiledContainer = styled.div`
  position: relative;
  padding-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  background: #333;
  padding: 16px 20px 0;
  border-radius: 4px;
  border: 0;
  color: white;

  :focus {
    background: #505050;
    outline: none;
  }
`;

const EmailLabel = styled.label`
  position: absolute;
  left: 20px;
  color: #8c8c8c;

  top: ${(props) => (props.$isEmailFocus ? '4px' : '16px')};
  font-size: ${(props) => (props.$isEmailFocus ? '12px' : '16px')};

  transition: all 0.2s ease;
`;

const PasswordLabel = styled.label`
  position: absolute;
  left: 20px;
  color: #8c8c8c;

  top: ${(props) => (props.$isPasswordFocus ? '4px' : '16px')};
  font-size: ${(props) => (props.$isPasswordFocus ? '12px' : '16px')};

  transition: all 0.2s ease;
`;

const InputError = styled.div`
  color: #e87c03;
  margin-bottom: -6px;
  padding: 6px 3px;
  font-size: 14px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 24px 0 12px;
  padding: 16px;
  border: none;
  border-radius: 4px;
  background: #e50914;
  color: white;
  font-size: 16px;
  font-weight: 700;

  :hover {
    cursor: pointer;
  }
`;

const LoginFormHelp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #8c8c8c;
  font-size: 14px;
`;

const HelpRemember = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

const RememberCheckbox = styled.input`
  // border: 0;
  // clip: rect(0 0 0 0);
  // clippath: inset(50%);
  // height: 1px;
  // margin: -1px;
  // overflow: hidden;
  // padding: 0;
  // position: absolute;
  // white-space: nowrap;
  // width: 1px;
`;

const RememberText = styled.label`
  display: flex;
  align-items: center;

  position: relative;
  margin-left: 4px;

  ::before {
    content: '';
    position: absolute;
    display: block;

    background: #737373;
    border-radius: 2px;
    border: 0;
    height: 16px;
    left: -20px;
    width: 16px;
  }

  ::after {
    content: '\f00c';
    font-family: 'Font Awesome 5 free';
    font-weight: 900;
    color: black;
    position: absolute;
    display: ${(props) => (props.$isChecked ? 'block' : 'none')};
    left: -19px;
  }
`;

const HelpLink = styled.a`
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default LoginFormMain;
