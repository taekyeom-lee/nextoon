import styled from 'styled-components';

import SliderItem from './SliderItem';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Slider({ data, numberOfPage, leftOfItem, pageNumber, relativeTop }) {
  const { width } = useWindowDimensions();

  return (
    <SliderBlock
      $pageNumber={pageNumber}
      $width={width}
      $numberOfPage={numberOfPage}
      $leftOfItem={leftOfItem}
    >
      {data.map((data, index) => (
        <SliderItem
          key={data.id}
          data={data}
          index={index}
          relativeTop={relativeTop}
          pageNumber={pageNumber}
          numberOfPage={numberOfPage}
          leftOfItem={leftOfItem}
          totalWidth={width}
        />
      ))}
    </SliderBlock>
  );
}

const handleTransformType = (pageNumber, width, numberOfPage, leftOfItem) => {
  let x;

  if (pageNumber !== numberOfPage) {
    x = -(width - 17 - 120) * (pageNumber - 1);
  } else {
    if (pageNumber !== 1)
      x =
        -(width - 17 - 120) * (pageNumber - 1 - 1) -
        ((width - 17 - 120) / 6) * leftOfItem;
  }

  const transformX = 'translateX(' + x + 'px)';
  return transformX;
};

const SliderBlock = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1px;

  transform: ${(props) =>
    handleTransformType(
      props.$pageNumber,
      props.$width,
      props.$numberOfPage,
      props.$leftOfItem
    )};
  transition: transform 300ms;

  width: 100%;
  height: calc(100% - 1px);
`;

export default Slider;
