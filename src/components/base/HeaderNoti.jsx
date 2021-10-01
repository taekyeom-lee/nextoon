import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';

import HeaderNotiMenu from './HeaderNotiMenu';

function HeaderNoti() {
  return (
    <HeaderNotiBlock>
      <Notification />
      <HeaderNotiMenu />
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

export default HeaderNoti;
