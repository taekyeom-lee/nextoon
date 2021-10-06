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
    >
      <TitleCard src={dataImg} alt="title-card" />
      {previewModalIsOpen && <PreViewModal index={index} dataImg={dataImg} />}
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div`
  position: relative;
  padding: 0 2px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const TitleCard = styled.img`
  // width: 16.45%;
  width: 292px;
  height: 164px;
  object-fit: cover;
  border-radius: 4px;
`;

export default SliderItem;
