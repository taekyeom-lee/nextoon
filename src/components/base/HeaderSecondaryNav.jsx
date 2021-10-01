import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import HeaderNoti from './HeaderNoti';
import HeaderUser from './HeaderUser';

function HeaderSecondaryNav() {
  return (
    <HeaderSecondaryNavBlock>
      <NavElement>
        <SeacrhBox />
      </NavElement>
      <NavElement>
        <HeaderNoti />
      </NavElement>
      <NavElement>
        <HeaderUser />
      </NavElement>
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

  :last-child {
    margin-right: 0px;
  }
`;

const SeacrhBox = styled(FaSearch)`
  width: 20px;
  height: 20px;
`;

export default HeaderSecondaryNav;
