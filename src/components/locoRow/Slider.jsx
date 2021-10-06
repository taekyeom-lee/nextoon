import styled from 'styled-components';

import SliderItem from './SliderItem';

function Slider({ datas }) {
  return (
    <SliderBlock>
      {datas.map((data, index) => (
        <SliderItem key={data.id} dataImg={data.dataImg} index={index} />
      ))}
    </SliderBlock>
  );
}

const SliderBlock = styled.div`
  display: flex;
  padding: 0 64px;
`;

export default Slider;
