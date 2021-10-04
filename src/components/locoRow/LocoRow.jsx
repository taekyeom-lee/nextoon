import styled from 'styled-components';
import RowContainer from './RowContainer';
import RowHeader from './RowHeader';

function LocoRow() {
  return (
    <LocoRowBlock>
      <RowHeader />
      <RowContainer />
    </LocoRowBlock>
  );
}

const LocoRowBlock = styled.div`
  margin: 3vw 0;
`;

export default LocoRow;
