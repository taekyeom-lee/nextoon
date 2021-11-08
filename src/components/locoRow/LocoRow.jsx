import styled from 'styled-components';

import RowHeader from './RowHeader';
import RowContainer from './RowContainer';

import { webtoon } from '../../resources/data';

function LocoRow({ title }) {
  const data = webtoon.slice(0);

  return (
    <LocoRowBlock>
      <RowHeader title={title} />
      <RowContainer data={data} />
    </LocoRowBlock>
  );
}

const LocoRowBlock = styled.div`
  margin: 3vw 0;
`;

export default LocoRow;
