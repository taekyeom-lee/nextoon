import styled from 'styled-components';

function HeaderUserMenuItem({ children }) {
  return <HeaderUserMenuItemBlock>{children}</HeaderUserMenuItemBlock>;
}

const HeaderUserMenuItemBlock = styled.div`
  font-size: 0.8rem;

  padding: 5px 10px;
`;

export default HeaderUserMenuItem;
