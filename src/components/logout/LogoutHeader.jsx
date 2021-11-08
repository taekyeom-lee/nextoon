import { Link } from 'react-router-dom';

import styled from 'styled-components';

function LogoutHeader() {
  return (
    <LogoutHeaderBlock>
      <HeaderLogo to="/">NEXToon</HeaderLogo>
      <HeaderLink to="/login">로그인</HeaderLink>
      {/* 유저의 Login 상태에 따라 Login 그리고 Logout */}
    </LogoutHeaderBlock>
  );
}

const LogoutHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  margin: 0 3.5rem;
`;

const HeaderLogo = styled(Link)`
  font-weight: 600;
  font-size: 2.5rem;
  color: red;
  text-decoration: none;
`;

const HeaderLink = styled(Link)`
  background-color: #e50914;
  border-radius: 4px;
  padding: 6px 20px;
  font-weight: 400;
  font-size: 1rem;
  color: white;
  text-decoration: none;
`;

export default LogoutHeader;
