import styled from 'styled-components';

import RowHeader from './RowHeader';
import RowContainer from './RowContainer';

import { webtoon } from '../../resources/data';

function LocoRow({ title, type }) {
  let data = webtoon.slice(0);

  if (type) {
    data = data.filter((data) => data.tags.find((tag) => tag === type));
  }

  let numberOfItem = 6;

  let numberOfPage = Math.ceil(data.length / numberOfItem);

  let leftOfItem = data.length - Math.floor(data.length / numberOfItem) * 6;

  return (
    <LocoRowBlock>
      <RowHeader title={title} />
      <RowContainer
        data={data}
        numberOfPage={numberOfPage}
        leftOfItem={leftOfItem}
      />
    </LocoRowBlock>
  );
}

const LocoRowBlock = styled.div`
  margin: 3vw 0;
`;

export default LocoRow;
