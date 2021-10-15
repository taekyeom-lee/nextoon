import styled from 'styled-components';

import RowHeader from './RowHeader';
import RowContainer from './RowContainer';
import useLocoRow from '../../hooks/useLocoRow';

function LocoRow({ title }) {
  const { data } = useLocoRow();

  const datas = data.slice(0); // title값에 해당하는 data 선정하기

  return (
    <LocoRowBlock>
      <RowHeader title={title} />
      <RowContainer datas={datas} />
    </LocoRowBlock>
  );
}

const LocoRowBlock = styled.div`
  margin: 3vw 0;
`;

export default LocoRow;
