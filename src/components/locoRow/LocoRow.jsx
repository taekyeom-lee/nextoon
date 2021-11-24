import styled from 'styled-components';

import RowHeader from './RowHeader';
import RowContainer from './RowContainer';

import { webtoon } from '../../resources/data';

function LocoRow({ title, type }) {
  let data = webtoon.slice(0);

  if (type) {
    data = data.filter((data) => data.tags.find((tag) => tag === type));
  }

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
