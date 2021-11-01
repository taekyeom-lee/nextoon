import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginHeader() {
  return (
    <LoginHeaderBlock>
      <LoginLogo to="/">NEXToon</LoginLogo>
    </LoginHeaderBlock>
  );
}

const LoginHeaderBlock = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 90px;
`;

const LoginLogo = styled(Link)`
  margin-left: 3%;
  text-decoration: none;
  font-weight: bold;
  font-size: 2.4rem;
  color: red;
`;

export default LoginHeader;
