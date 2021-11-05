import { useSelector } from 'react-redux';
import styled from 'styled-components';

import firebase from '../../api/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { useHistory } from 'react-router';

import { useState } from 'react';

function RegisterForm() {
  const [password, setPassword] = useState('');

  const selected = useSelector((state) => state.auth);

  const auth = getAuth(firebase);

  const history = useHistory();

  const onClick = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, selected.email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        history.push('/');
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
        console.log(error);
      });
  };

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <RegisterFormBlock>
      <RegisterCenter>
        <form>
          <FormContainer>
            <StepHeader>
              <StepIndicator>1/1단계</StepIndicator>
              <StepTitle>
                회원님, 반갑습니다.
                <br />
                넥스트툰 가입 절차는 간단합니다.
              </StepTitle>
            </StepHeader>
            <ContextRow>
              비밀번호를 입력하시면 바로 시청하실 수 있습니다.
            </ContextRow>
            <SimpleForm>
              <InputReadOnly>
                <LabelReadOnly>이메일 주소</LabelReadOnly>
                <ValueReadOnly>{selected.email}</ValueReadOnly>
              </InputReadOnly>
              <PasswordContainer>
                <PasswordInput onChange={onChange} />
                <PasswordLabel>비밀번호를 입력하세요</PasswordLabel>
              </PasswordContainer>
            </SimpleForm>

            <LinkForgotPassword>비밀번호를 잊으셨나요?</LinkForgotPassword>
            <SubmitBtnContainer>
              <SubmitBtn onClick={onClick}>등록</SubmitBtn>
            </SubmitBtnContainer>
          </FormContainer>
        </form>
      </RegisterCenter>
    </RegisterFormBlock>
  );
}

const RegisterFormBlock = styled.div`
  padding-bottom: 95px;
`;

const RegisterCenter = styled.div`
  margin: 0 auto 15px;
  padding: 20px 60px;
`;

const FormContainer = styled.div`
  max-width: 440px;
  margin: 0 auto;
`;

const StepHeader = styled.div`
  margin-top: 20px;
`;

const StepIndicator = styled.span`
  font-size: 12px;
`;

const StepTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  margin: 0 0 0.4em;
`;

const ContextRow = styled.div`
  font-size: 20px;
`;

const SimpleForm = styled.div`
  margin: 10px 0 20px;
`;

const InputReadOnly = styled.div`
  padding: 10px 0;
`;

const LabelReadOnly = styled.div``;

const ValueReadOnly = styled.div`
  font-weight: 600;
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
`;

const PasswordLabel = styled.label`
  position: absolute;
  left: 0;
`;

const LinkForgotPassword = styled.a`
  color: #0071eb;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const SubmitBtnContainer = styled.div`
  margin-top: 24px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  border: none;
  min-height: 48px;
  border-radius: 2px;
  font-size: 16px;
  color: white;
  background: #e50914;

  :hover {
    cursor: pointer;
  }
`;

export default RegisterForm;
