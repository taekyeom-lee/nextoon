import { FaSearch, FaBell, FaUserCircle, FaAngleDown } from 'react-icons/fa';

import styled from 'styled-components';
import HeaderUserMenu from './HeaderUserMenu';

function HeaderSecondaryNav() {
  return (
    <HeaderSecondaryNavBlock>
      <NavElement>
        <SeacrhBox />
      </NavElement>
      <NavElement>
        <Notification />
      </NavElement>
      <User />
      <Caret />
      <HeaderUserMenu />
    </HeaderSecondaryNavBlock>
  );
}

const HeaderSecondaryNavBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const NavElement = styled.div`
  display: flex;
  align-items: center;
  color: white;

  margin-right: 20px;
`;

const SeacrhBox = styled(FaSearch)`
  width: 20px;
  height: 20px;
`;

const Notification = styled(FaBell)`
  width: 24px;
  height: 24px;
`;

const User = styled(FaUserCircle)`
  width: 28px;
  height: 28px;
`;

const Caret = styled(FaAngleDown)`
  width: 16px;
  heigth: 16px;

  margin-left: 10px;
`;

export default HeaderSecondaryNav;
