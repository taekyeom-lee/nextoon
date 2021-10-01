import styled from 'styled-components';

import HeaderNotiMenuItem from './HeaderNotiMenuItem';

function HeaderNotiMenu() {
  return (
    <HeaderNotiMenuBlock>
      <TopBar />
      <HeaderNotiMenuItem />
      <HeaderNotiMenuItem />
    </HeaderNotiMenuBlock>
  );
}

const HeaderNotiMenuBlock = styled.div`
  position: absolute;
  top: calc(24px + (4rem - 24px) / 2);
  right: 0;
  width: 24rem;
  background-color: rgba(0, 0, 0, 0.9);
  border: solid 1px rgba(255, 255, 255, 0.15);
  z-index: 999;
`;

const TopBar = styled.div`
  height: 2px;
  background-color #e5e5e5;
`;

export default HeaderNotiMenu;
