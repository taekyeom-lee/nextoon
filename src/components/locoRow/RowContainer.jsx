import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import SliderItem from './SliderItem';

function RowContainer() {
  return (
    <RowContainerBlock>
      <HandlePrev>
        <LeftAngle />
      </HandlePrev>
      <PaginationIndicator>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </PaginationIndicator>
      <Slider>
        <SliderItem />
      </Slider>
      <HandleNext>
        <RightAngle />
      </HandleNext>
    </RowContainerBlock>
  );
}

const RowContainerBlock = styled.div`
  position: relative;
  display: flex;
`;

const Slider = styled.div`
  padding: 0 64px;
`;

const HandlePrev = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  z-index: 20;
`;

const HandleNext = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  z-index: 20;
`;

const LeftAngle = styled(FaAngleLeft)`
  width: 40px;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const RightAngle = styled(FaAngleRight)`
  width: 40px;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const PaginationIndicator = styled.ul`
  position: absolute;
  top: 0px;
  right: 62px;
  display: flex;
  margin-top: -12px;
  padding: 0;
  list-style-type: none;

  li {
    width: 12px;
    height: 2px;
    margin-left: 1px;
    background: #4d4d4d;
    // background-color: #aaa;
  }
`;

export default RowContainer;
