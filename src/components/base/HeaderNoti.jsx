import styled from 'styled-components';
import { FaBell, FaCaretUp } from 'react-icons/fa';

import HeaderNotiMenu from './HeaderNotiMenu';
import useMenu from '../../hooks/useMenu';

function HeaderNoti() {
  const { menuIsOpen, openMenu, closeMenu } = useMenu();

  return (
    <HeaderNotiBlock onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <Notification />
      {/* <CaretUp /> */}
      {/* <HeaderNotiMenu /> */}
      {menuIsOpen && <CaretUp />}
      {menuIsOpen && <HeaderNotiMenu />}
    </HeaderNotiBlock>
  );
}

const HeaderNotiBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Notification = styled(FaBell)`
  width: 24px;
  height: 24px;
`;

const CaretUp = styled(FaCaretUp)`
  position:absolute;
  bottom: -24px;
  left: calc(50%-10px);
  width: 24px;
  height: 24px;
  z-index: 9999;
  color #e5e5e5;
`;

export default HeaderNoti;
