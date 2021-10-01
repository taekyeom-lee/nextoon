import styled from 'styled-components';
import { FaUserCircle, FaAngleDown } from 'react-icons/fa';

import HeaderUserMenu from '../base/HeaderUserMenu';

function HeaderUser() {
  return (
    <HeaderUserBlock>
      <User />
      <Caret />
      <HeaderUserMenu />
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

const Caret = styled(FaAngleDown)`
  width: 16px;
  heigth: 16px;

  margin-left: 10px;
`;

export default HeaderUser;
