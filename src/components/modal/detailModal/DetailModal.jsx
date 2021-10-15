import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import EpisodeCard from './EpisodeCard';
import MoreLikeContainer from './MoreLikeContainer';

import girl from '../../../img/girl.jpg';

function DetailModal({ onClose }) {
  return (
    <DetailModalBlock>
      <DetailModalImage>
        <ImageContainer>
          <Image src={girl} />
        </ImageContainer>
        <Close onClick={onClose}>
          <CloseButton />
        </Close>
      </DetailModalImage>
      <DetailModalInfo>
        <DetailContainer>
          Detail Blur Blur Blur Blur Blur... Blur Blur Blur Blur Blur... Blur
          Blur Blur Blur Blur...
        </DetailContainer>
        <EpisodeContainer>
          <EpisodeHeader>
            <EpisodeHeaderLabel>회차</EpisodeHeaderLabel>
            <EpisodeHeaderSelector>시즌 1</EpisodeHeaderSelector>
          </EpisodeHeader>
          <EpisodeCardList>
            <EpisodeCard index="1" />
            <EpisodeCard index="2" />
            <EpisodeCard index="3" />
            <EpisodeCard index="4" />
            <EpisodeCard index="5" />
            <EpisodeCard index="6" />
            <EpisodeCard index="7" />
            <EpisodeCard index="8" />
          </EpisodeCardList>
        </EpisodeContainer>
        <MoreLikeContainer />
      </DetailModalInfo>
    </DetailModalBlock>
  );
}

const DetailModalBlock = styled.div`
  position: absolute;
  top: 40px;
  left: calc((100% - 850px) / 2);

  width: 850px;

  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
  border-radius: 4px;
  z-index: 100;
  background-color: #141414;

  // overflow-y: initial !important;

  :hover {
    cursor: pointer;
  }
`;
const DetailModalImage = styled.div`
  position: relative;
`;

// ImageContainer
const ImageContainer = styled.div``;

const Image = styled.img`
  width: 850px;
  height: 480px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Close = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background-color: #181818;
  border-radius: 50%;
`;

const CloseButton = styled(MdClose)`
  width: 24px;
  height: 24px;
`;

const DetailModalInfo = styled.div`
  padding: 0 48px;
`;

// DetailContainer
const DetailContainer = styled.div`
  display: flex;
`;

// EpisodeContainer
const EpisodeContainer = styled.div``;

// EpisodeContainer - Header
const EpisodeHeader = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: space-between;
`;

const EpisodeHeaderLabel = styled.h3``;

const EpisodeHeaderSelector = styled.div`
  display: flex;
  align-items: center;
`;

const EpisodeCardList = styled.div``;

export default DetailModal;
