import styled from 'styled-components';

import LogoutContainer from './LogoutContainer';

function LogoutBody() {
  return (
    <LogoutBodyBlock>
      <LogoutContainer />
    </LogoutBodyBlock>
  );
}

const LogoutBodyBlock = styled.div`
  margin: 0 auto -236px;
  max-width: 450px;
  min-height: 100vh;
  background-color: transparent;
`;

export default LogoutBody;
