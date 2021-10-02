import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import HeaderLogo from './HeaderLogo';

function HeaderPrimaryNav() {
  return (
    <HeaderPrimaryNavBlock>
      <HeaderLogo />
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/comic" activeClassName="active">
            웹툰
          </NavLink>
        </li>
        <li>
          <NavLink to="/novel" activeClassName="active">
            소설
          </NavLink>
        </li>
        <li>
          <NavLink to="/latest" activeClassName="active">
            NEW! 요즘 대세 콘텐츠
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-list" activeClassName="active">
            내가 찜한 콘텐츠
          </NavLink>
        </li>
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

      a {
        color: #e5e5e5;
        text-decoration: none;

        &.active {
          color: white;
          font-weight: bold;
        }
      }
    }
  }
`;

export default HeaderPrimaryNav;
