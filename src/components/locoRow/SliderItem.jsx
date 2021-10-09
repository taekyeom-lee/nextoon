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
  padding: 0 2p

  z-index: 10;
`;

const TitleCard = styled.img`
  width: calc(((100vw - 120px) / 6) - (2px * 2));
  height: 164px;
  object-fit: cover;
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }
`;

export default SliderItem;
