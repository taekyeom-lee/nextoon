import styled from 'styled-components';

function EmailInputForm() {
  return (
    <EmailInputFormBlock>
      <EmailInput id="email"></EmailInput>
      <EmailLabel for="email">이메일 주소</EmailLabel>
      <EmailButton>시작하기</EmailButton>
    </EmailInputFormBlock>
  );
}

const EmailInputFormBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  position: relative;
`;

const EmailInput = styled.input`
  width: 500px;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const EmailLabel = styled.label`
  position: absolute;
  color: #8c8c8c;
  left: 0px;
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

// const EmailError = styled.div``;

export default EmailInputForm;
