import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Slider from './Slider';
import useSlider from '../../hooks/useSlider';

function RowContainer({ data }) {
  const { pageNumber, pageRef, raisePageNumber, lowerPageNumber } = useSlider();

  // let datas = data.slice(pageNumber * 6 - 6, pageNumber * 6);
  // let dataPrev = data.slice(pageNumber * 6 - 8, pageNumber * 6 - 7); // 처음에 들어감 마지막 들어가있음 -는 적용되는듯
  // let dataNext = data.slice(pageNumber * 6, pageNumber * 6 + 1); // 마지막 안들어감

  let datas = data.slice(0);

  return (
    <RowContainerBlock>
      <HandlePrev>
        {pageNumber !== 1 && <LeftAngle onClick={lowerPageNumber} />}
      </HandlePrev>
      <PaginationIndicator ref={pageRef}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </PaginationIndicator>
      <Slider datas={datas} pageNumber={pageNumber} />
      <HandleNext>
        {pageNumber !== 7 && <RightAngle onClick={raisePageNumber} />}
      </HandleNext>
    </RowContainerBlock>
  );
}

const RowContainerBlock = styled.div`
  position: relative;
  display: flex;
  height: 164px;
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

  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  background: rgba(20, 20, 20, 0.5);
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

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  background: rgba(20, 20, 20, 0.5);
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
