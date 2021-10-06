import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import girl from '../../img/girl.jpg';

import EpisodeCard from './EpisodeCard';
import MoreLikeContainer from './MoreLikeContainer';

function PreviewDetailModal() {
  return (
    <PreviewDetailModalBlock>
      <PreviewDetailModalImage>
        <ImageContainer>
          <Image src={girl} />
        </ImageContainer>
        <Close>
          <CloseButton />
        </Close>
      </PreviewDetailModalImage>
      <PreviewDetailModalInfo>
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
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </EpisodeCardList>
        </EpisodeContainer>
        <MoreLikeContainer />
      </PreviewDetailModalInfo>
    </PreviewDetailModalBlock>
  );
}

const PreviewDetailModalBlock = styled.div`
  width: 850px;

  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
  border-radius: 4px;
`;
const PreviewDetailModalImage = styled.div`
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

const PreviewDetailModalInfo = styled.div`
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

export default PreviewDetailModal;
