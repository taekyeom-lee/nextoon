import styled from 'styled-components';
import usePreviewModal from '../../hooks/usePreviewModal';
import PreViewModal from '../previewModal/PreviewModal';

function SliderItem({ dataImg, index }) {
  const { previewModalIsOpen, mouseEnterItem, mouseLeaveItem } =
    usePreviewModal();

  return (
    <SliderItemBlock
      onMouseEnter={mouseEnterItem}
      onMouseLeave={mouseLeaveItem}
      $index={index}
    >
      <TitleCard src={dataImg} alt="title-card" />
      {previewModalIsOpen && <PreViewModal index={index} dataImg={dataImg} />}
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div`
  position: relative;
  padding: 0 2px;
  // flex: 0 0 1.4%;

  // padding-left: ${(props) => props.$index % 6 === 0 && '0'}
  // padding-right: ${(props) => props.$index % 6 === 6 && '0'}

  // transform: ${(props) => props.$menuIsOpen && 'rotate(180deg)'};
  // &:first-child {
  //   padding-left: 0;
  // }

  // &:last-child {
  //   padding-right: 0;
  // }

  z-index: 10;
`;

const TitleCard = styled.img`
  width: 293px;
  height: 164px;
  object-fit: cover;
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }
`;

export default SliderItem;
