import styled from 'styled-components';

import HeaderSearchBox from './HeaderSearchBox';
import HeaderNoti from './HeaderNoti';
import HeaderUser from './HeaderUser';

function HeaderSecondaryNav() {
  return (
    <HeaderSecondaryNavBlock>
      <NavElement>
        <HeaderSearchBox />
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

export default HeaderSecondaryNav;
