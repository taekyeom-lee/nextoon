import styled from 'styled-components';

import SliderItem from './SliderItem';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Slider({ datas, pageNumber }) {
  const { width } = useWindowDimensions();

  return (
    <SliderBlock $pageNumber={pageNumber} $width={width}>
      {datas.map((data, index) => (
        <SliderItem key={data.id} dataImg={data.dataImg} index={index} />
      ))}
    </SliderBlock>
  );
}

const handleTransformType = (pageNumber, width) => {
  const x = -(width - 120) * (pageNumber - 1);
  // const x = -1782 * (pageNumber - 1);

  const transformX = 'translateX(' + x + 'px)';
  return transformX;
};

const SliderBlock = styled.div`
  display: flex;
  padding-bottom: 1px;

  transform: ${(props) => handleTransformType(props.$pageNumber, props.$width)};
  transition: transform 300ms;
`;

export default Slider;
