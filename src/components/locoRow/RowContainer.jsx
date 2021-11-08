import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Slider from '../slider/Slider';
import useRowContainer from '../../hooks/useRowContainer';

function RowContainer({ data }) {
  const {
    pageNumber,
    relativeTop,
    pageRef,
    rowRef,
    raisePageNumber,
    lowerPageNumber,
  } = useRowContainer();

  return (
    <RowContainerBlock ref={rowRef}>
      {pageNumber !== 1 && (
        <HandlePrev>
          <LeftAngle onClick={lowerPageNumber} />
        </HandlePrev>
      )}
      <PaginationIndicator ref={pageRef}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </PaginationIndicator>
      <Slider data={data} pageNumber={pageNumber} relativeTop={relativeTop} />
      {pageNumber !== 7 && (
        <HandleNext>
          <RightAngle onClick={raisePageNumber} />
        </HandleNext>
      )}
    </RowContainerBlock>
  );
}

const RowContainerBlock = styled.div`
  position: relative;
  height: 165px;
  padding: 0 60px;

  // padding: 0 4%;
`;

const HandlePrev = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 60px;
  background: rgba(20, 20, 20, 0.5);
  z-index: 10;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const HandleNext = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60px;
  background: rgba(20, 20, 20, 0.5);
  z-index: 10;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
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
  display: flex;
  position: absolute;
  top: 0px;
  right: 64px;
  list-style-type: none;
  margin-top: -12px;
  padding: 0;

  li {
    width: 12px;
    height: 2px;
    margin-left: 1px;
    background: #4d4d4d;
  }
`;

export default RowContainer;
