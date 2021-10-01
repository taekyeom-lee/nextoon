import styled from 'styled-components';

import HeaderPrimaryNav from './HeaderPrimaryNav';
import HeaderSecondaryNav from './HeaderSecondaryNav';

function Header() {
  return (
    <Block>
      <Inner>
        <HeaderPrimaryNav />
        <HeaderSecondaryNav />
      </Inner>
    </Block>
  );
}

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled.div`
  height: 100%;
  display: flex;
  align-itmes: center;
  justify-content: space-between;

  margin: 0 4rem;
`;

export default Header;
