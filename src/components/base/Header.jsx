import styled from 'styled-components';

import HeaderPrimaryNav from './HeaderPrimaryNav';
import HeaderSecondaryNav from './HeaderSecondaryNav';

function Header() {
  return (
    <Block>
      <HeaderPrimaryNav />
      <HeaderSecondaryNav />
    </Block>
  );
}

const Block = styled.div`
  height: 4rem;
  display: flex;
  align-itmes: center;
  justify-content: space-between;

  margin: 0 4rem;
`;

export default Header;
