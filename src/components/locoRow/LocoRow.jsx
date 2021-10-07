import styled from 'styled-components';
import useLocoRow from '../../hooks/useLocoRow';
import RowContainer from './RowContainer';
import RowHeader from './RowHeader';

function LocoRow({ title, onOpen }) {
  const { data } = useLocoRow();

  return (
    <LocoRowBlock>
      <RowHeader title={title} onOpen={onOpen} />
      <RowContainer data={data} />
    </LocoRowBlock>
  );
}

const LocoRowBlock = styled.div`
  margin: 3vw 0;
`;

export default LocoRow;
