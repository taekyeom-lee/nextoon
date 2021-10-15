import styled from 'styled-components';

import PreviewModal from '../modal/previewModal/PreviewModal';
import usePreviewModal from '../../hooks/usePreviewModal';

import PreviewModalPortal from '../../portal/PreviewModalPortal';

function SliderItem({ dataImg, index, relativeTop, pageNumber }) {
  const { previewModalIsOpen, titleCardRef, mouseEnterItem, mouseLeaveItem } =
    usePreviewModal();

  return (
    <SliderItemBlock
      onMouseEnter={mouseEnterItem}
      onMouseLeave={mouseLeaveItem}
      $index={index}
      ref={titleCardRef}
    >
      <TitleCard src={dataImg} alt="title-card" />
      {previewModalIsOpen && (
        <PreviewModalPortal>
          <PreviewModal
            index={index}
            dataImg={dataImg}
            relativeTop={relativeTop}
            relativeLeft={titleCardRef.current.offsetLeft}
            pageNumber={pageNumber}
          />
        </PreviewModalPortal>
      )}
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div`
  position: relative;
  padding: 0 2px;

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
