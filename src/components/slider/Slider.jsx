import styled from 'styled-components';

import SliderItem from './SliderItem';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Slider({ datas, pageNumber, relativeTop }) {
  const { width } = useWindowDimensions();

  return (
    <SliderBlock $pageNumber={pageNumber} $width={width}>
      {datas.map((data, index) => (
        <SliderItem
          key={data.id}
          dataImg={data.dataImg}
          index={index}
          relativeTop={relativeTop}
          pageNumber={pageNumber}
          totalWidth={width}
        />
      ))}
    </SliderBlock>
  );
}

const handleTransformType = (pageNumber, width) => {
  const x = -(width - 17 - 120) * (pageNumber - 1);

  const transformX = 'translateX(' + x + 'px)';
  return transformX;
};

const SliderBlock = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1px;

  transform: ${(props) => handleTransformType(props.$pageNumber, props.$width)};
  transition: transform 300ms;

  width: 100%;
  height: calc(100% - 1px);
`;

export default Slider;
