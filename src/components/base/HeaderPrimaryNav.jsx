import styled from 'styled-components';

import HeaderLogo from './HeaderLogo';

function HeaderPrimaryNav() {
  return (
    <HeaderPrimaryNavBlock>
      <HeaderLogo />
      <ul>
        <li>홈</li>
        <li>웹툰</li>
        <li>소설</li>
        <li>NEW! 요즘 대세 콘텐츠</li>
        <li>내가 찜한 콘텐츠</li>
      </ul>
    </HeaderPrimaryNavBlock>
  );
}

const HeaderPrimaryNavBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    list-style: none;

    margin: 0px;
    padding: 0px;

    li {
      font-size: 0.8rem;

      margin-left: 20px;
    }
  }
`;

export default HeaderPrimaryNav;
