import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LogoutContainer() {
  return (
    <LogoutContainerBlock>
      <LogoutTitle>벌써 나가시려고요?</LogoutTitle>
      <LogoutBody>
        참고로 알려드리면, 매번 Netflix에서 로그아웃하실 필요는 없습니다. 공용
        컴퓨터에서 이용한 경우에만 로그아웃하시면 됩니다.
      </LogoutBody>
      <LogoutBody>30초 후 메인페이지로 이동합니다.</LogoutBody>
      <LogoutButton to="./">지금 이동</LogoutButton>
    </LogoutContainerBlock>
  );
}

const LogoutContainerBlock = styled.div`
  width: 350px;
  background-color: #fafafa;
  padding: 32px 40px;
  color: #333;
  margin: 20px auto 0;
`;

const LogoutTitle = styled.h1`
  margin: 0 0 20px 0;
  padding: 0;
  font-weight: 400;
`;

const LogoutBody = styled.p`
  margin: 16px 0;
`;

const LogoutButton = styled(Link)`
  display: block;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-size: 20px;
  color: white;
  background: #0080ff;
  border-radius: 2px;
  padding: 10px 0;
  margin: 10px 0;
  text-decoration: none;

  :hover {
    background: #2490fd;
  }
`;

export default LogoutContainer;
