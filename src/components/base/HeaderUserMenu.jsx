import styled from 'styled-components';

import HeaderUserMenuItem from './HeaderUserMenuItem';

function HeaderUserMenu() {
  return (
    <HeaderUserMenuBlock>
      <HeaderUserMenuItem>계정</HeaderUserMenuItem>
      <HeaderUserMenuItem>고객센터</HeaderUserMenuItem>
      <HeaderUserMenuItem>로그아웃</HeaderUserMenuItem>
    </HeaderUserMenuBlock>
  );
}

const HeaderUserMenuBlock = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  width: 10rem;
  background-color: rgba(0, 0, 0, 0.9);
  border-bottom: solid 1px rgba(255, 255, 255, 0.15);
  z-index: 999;

  padding: 10px 0;
`;

export default HeaderUserMenu;
