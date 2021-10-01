import { Link } from 'react-router-dom';
import styled from 'styled-components';

function HeaderLogo() {
  return (
    <HeaderLogoBlock>
      <Link to="/">NEXToon</Link>
    </HeaderLogoBlock>
  );
}

const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: bold;
    font-size: 1.2rem;
    color: red;
    text-decoration: none;

    margin-right: 20px;
  }
`;

export default HeaderLogo;
