import styled from 'styled-components';

import PreviewModal from '../modal/previewModal/PreviewModal';
import DetailModal from '../modal/detailModal/DetailModal';
import DetailBackdrop from '../modal/detailModal/DetailBackdrop';
import usePreviewModal from '../../hooks/usePreviewModal';

import PreviewModalPortal from '../../portal/PreviewModalPortal';
import DetailModalPortal from '../../portal/DetailModalPortal';
import { useState } from 'react';

function SliderItem({ dataImg, index, relativeTop, pageNumber }) {
  const { previewModalIsOpen, titleCardRef, mouseEnterItem, mouseLeaveItem } =
    usePreviewModal();

  const [detailModaIsOpen, setDetailModalIsOpen] = useState(false);

  const highFunction = (toggle) => {
    setDetailModalIsOpen(toggle);
  };

  const closeModal = () => {
    setDetailModalIsOpen(false);
    mouseLeaveItem();
  };

  return (
    <SliderItemBlock
      // onMouseEnter={mouseEnterItem}
      onMouseOver={mouseEnterItem}
      onMouseLeave={mouseLeaveItem}
      $index={index}
      ref={titleCardRef}
    >
      <TitleCard src={dataImg} alt="title-card" />
      {previewModalIsOpen && !detailModaIsOpen && (
        <PreviewModalPortal>
          <PreviewModal
            index={index}
            dataImg={dataImg}
            relativeTop={relativeTop}
            relativeLeft={titleCardRef.current.offsetLeft}
            pageNumber={pageNumber}
            propFunction={highFunction}
          />
        </PreviewModalPortal>
      )}
      {detailModaIsOpen && (
        <DetailModalPortal>
          <DetailModal onClose={closeModal} />
          <DetailBackdrop onClose={closeModal} />
        </DetailModalPortal>
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
