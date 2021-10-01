import styled from 'styled-components';
import { FaUserCircle, FaAngleDown, FaCaretUp } from 'react-icons/fa';

import HeaderUserMenu from '../base/HeaderUserMenu';
import useMenu from '../../hooks/useMenu';

function HeaderUser() {
  const { menuIsOpen, openMenu, closeMenu } = useMenu();

  return (
    <HeaderUserBlock onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      <User />
      <AngleDown menuIsOpen={menuIsOpen} />
      {menuIsOpen && <CaretUp />}
      {menuIsOpen && <HeaderUserMenu />}
    </HeaderUserBlock>
  );
}

const HeaderUserBlock = styled.div`
  display: flex;
  align-items: center;
`;

const User = styled(FaUserCircle)`
  width: 28px;
  height: 28px;
`;

const AngleDown = styled(FaAngleDown)`
  width: 16px;
  heigth: 16px;

  margin-left: 10px;
  transform: ${(props) => props.menuIsOpen && 'rotate(180deg)'};
`;

const CaretUp = styled(FaCaretUp)`
  position: absolute;
  bottom: -4px;
  right: 28px;    
  width: 24px;
  height: 24px;
  z-index: 9999;
  color #e5e5e5;
`;

export default HeaderUser;
