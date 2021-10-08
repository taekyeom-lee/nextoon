import styled from 'styled-components';

import SliderItem from './SliderItem';

function Slider({ datas, pageNumber }) {
  return (
    <SliderBlock $pageNumber={pageNumber}>
      {datas.map((data, index) => (
        <SliderItem key={data.id} dataImg={data.dataImg} index={index} />
      ))}
    </SliderBlock>
  );
}

const handleTransformType = (pageNumber) => {
  const x = -1782 * (pageNumber - 1);

  const transformX = 'translateX(' + x + 'px)';
  return transformX;
};

const SliderBlock = styled.div`
  display: flex;
  padding: 0 60px;
  transform: ${(props) => handleTransformType(props.$pageNumber)};
  transition: transform 300ms;
`;

export default Slider;
