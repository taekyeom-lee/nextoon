import { useRef, useState } from 'react';
import styled from 'styled-components';
import DetailModalPortal from '../../portal/DetailModalPortal';
import PreviewModalPortal from '../../portal/PreviewModalPortal';
import DetailBackdrop from '../modal/detailModal/DetailBackdrop';
import DetailModal from '../modal/detailModal/DetailModal';
import PreViewModal from '../modal/previewModal/PreviewModal';

function MySliderItem({ item, index, totalWidth }) {
  const [previewModalIsOpen, setPreviewModalIsOpen] = useState(false);
  const [detailModalIsOpen, setDetailModalIsOpen] = useState(false);
  const [width, setWidth] = useState(false);
  const [height, setHeight] = useState(false);

  const titleCardRef = useRef(null);

  const pageNumber = 1;

  let yPosition;

  const mouseEnterItem = () => {
    setPreviewModalIsOpen(true);
    setWidth(titleCardRef.current.offsetWidth);
    setHeight(titleCardRef.current.offsetHeight);
  };

  const mouseLeaveItem = () => {
    setPreviewModalIsOpen(false);
    setWidth(0);
    setHeight(0);
  };

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
    <MySliderItemBlock ref={titleCardRef}>
      <TitleCardContainer
        onMouseEnter={mouseEnterItem}
        onMouseLeave={mouseLeaveItem}
      >
        <TitleCard src={item.img} alt="title-card" />
        {previewModalIsOpen && !detailModalIsOpen && (
          <PreviewModalPortal>
            <PreViewModal
              data={item}
              index={index}
              relativeTop={titleCardRef.current.offsetTop + 126}
              relativeLeft={titleCardRef.current.offsetLeft - 60}
              pageNumber={pageNumber}
              width={width}
              height={height}
              totalWidth={totalWidth}
              propFunction={highFunction}
            />
          </PreviewModalPortal>
        )}
      </TitleCardContainer>
      {detailModalIsOpen && (
        <DetailModalPortal>
          <DetailModal
            data={item}
            onClose={closeModal}
            propFunction={secondHighFunction}
          />
          <DetailBackdrop onClose={closeModal} />
        </DetailModalPortal>
      )}
    </MySliderItemBlock>
  );
}

const MySliderItemBlock = styled.div`
  position: relative;
  z-index: 10;
  flex: 0 0 calc(16.66666667% - 4px);
  margin: 0 2px;
`;

const TitleCardContainer = styled.div`
  // width: 100%;
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

export default MySliderItem;
