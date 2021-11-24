import { useState } from 'react';
import styled from 'styled-components';

import PreviewModal from '../modal/previewModal/PreviewModal';
import DetailModal from '../modal/detailModal/DetailModal';
import DetailBackdrop from '../modal/detailModal/DetailBackdrop';
import usePreviewModal from '../../hooks/usePreviewModal';

import PreviewModalPortal from '../../portal/PreviewModalPortal';
import DetailModalPortal from '../../portal/DetailModalPortal';

function SliderItem({
  data,
  index,
  relativeTop,
  pageNumber,
  totalWidth,
  numberOfPage,
  leftOfItem,
}) {
  const {
    previewModalIsOpen,
    width,
    height,
    titleCardRef,
    mouseEnterItem,
    mouseLeaveItem,
  } = usePreviewModal();

  const [detailModalIsOpen, setDetailModalIsOpen] = useState(false);

  let yPosition;

  const highFunction = (toggle) => {
    setDetailModalIsOpen(toggle);
  };

  const secondHighFunction = (y) => {
    yPosition = y;
  };

  const closeModal = () => {
    setDetailModalIsOpen(false);
    mouseLeaveItem();

    const root = document.getElementById('root');

    root.style.position = 'static';
    root.style.top = '0';

    window.scrollTo(0, yPosition);
  };

  return (
    <SliderItemBlock $index={index} ref={titleCardRef}>
      <TitleCardContainer
        onMouseEnter={mouseEnterItem}
        onMouseLeave={mouseLeaveItem}
      >
        <TitleCard src={data.img} alt="title-card" />
        {previewModalIsOpen && !detailModalIsOpen && (
          <PreviewModalPortal>
            <PreviewModal
              index={index}
              data={data}
              relativeTop={relativeTop}
              relativeLeft={titleCardRef.current.offsetLeft}
              pageNumber={pageNumber}
              width={width}
              height={height}
              totalWidth={totalWidth}
              numberOfPage={numberOfPage}
              leftOfItem={leftOfItem}
              propFunction={highFunction}
            />
          </PreviewModalPortal>
        )}
      </TitleCardContainer>
      {detailModalIsOpen && (
        <DetailModalPortal>
          <DetailModal
            data={data}
            onClose={closeModal}
            propFunction={secondHighFunction}
          />
          <DetailBackdrop onClose={closeModal} />
        </DetailModalPortal>
      )}
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div`
  position: relative;
  z-index: 10;
  flex: 0 0 calc(16.66666667% - 4px);
  margin: 0 2px;
`;

const TitleCardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const TitleCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;

  :hover {
    cursor: pointer;
  }
`;

export default SliderItem;
