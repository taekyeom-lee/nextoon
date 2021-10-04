import styled from 'styled-components';

import SliderItem from './SliderItem';

function Slider({ datas }) {
  return (
    <SliderBlock>
      {datas.map((data) => (
        <SliderItem key={data.id} dataImg={data.dataImg} />
      ))}
    </SliderBlock>
  );
}

const SliderBlock = styled.div`
  display: flex;
  padding: 0 64px;
`;

export default Slider;
