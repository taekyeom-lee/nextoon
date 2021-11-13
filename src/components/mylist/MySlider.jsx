import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import MySliderItem from './MySliderItem';

function MySlider({ list }) {
  const { width } = useWindowDimensions();

  return (
    <MySliderBlock>
      {list.map((item, index) => (
        <MySliderItem
          key={index}
          item={item}
          index={index}
          totalWidth={width}
        />
      ))}
    </MySliderBlock>
  );
}

const MySliderBlock = styled.div`
  display: flex;
  // width: 100%;
  height: 165px;
  margin-bottom: 4vw;
`;

export default MySlider;
