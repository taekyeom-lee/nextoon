import { useEffect } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import EpisodeCard from './EpisodeCard';
import MoreLikeContainer from './MoreLikeContainer';

function DetailModal({ data, onClose, propFunction }) {
  useEffect(() => {
    const root = document.getElementById('root');
    const y = window.scrollY;

    propFunction(y);

    root.style.position = 'fixed';
    root.style.top = -y + 'px';

    window.scrollTo(0, 0);
  });

  return (
    <DetailModalBlock>
      <DetailModalImage>
        <ImageContainer>
          <Image src={data.img} />
        </ImageContainer>
        <Close onClick={onClose}>
          <CloseButton />
        </Close>
      </DetailModalImage>
      <DetailModalInfo>
        <DetailContainer>
          <DetailData>
            <DetailTitle>작품설명</DetailTitle>
            <DetailInfo>{data.description}</DetailInfo>
          </DetailData>
          <DetailData>
            <DetailTitle>작가</DetailTitle>
            <DetailAuthors>
              {data.writer.map((writer, index) => (
                <DetailAuthor key={index}>
                  {writer.map((writer, index) =>
                    index === 0 ? (
                      <DetailLabel key={index}>{writer}</DetailLabel>
                    ) : (
                      <DetailItem key={index}>{writer}</DetailItem>
                    )
                  )}
                </DetailAuthor>
              ))}
            </DetailAuthors>
          </DetailData>
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
  top: 0;
  left: calc((100% - 850px) / 2);

  width: 850px;

  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
  border-radius: 4px;
  z-index: 100;
  background-color: #141414;

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
  justify-content: space-between;
`;

const DetailData = styled.div`
  display: flex;
  padding: 8px 0px;
`;

const DetailInfo = styled.div``;

const DetailTitle = styled.div`
  width: 90px;
  font-size: 20px;
`;

const DetailAuthors = styled.ul`
  margin: 0;
`;

const DetailAuthor = styled.li`
  list-style: none;
`;

const DetailLabel = styled.span`
  color: #777;
  padding-right: 8px;
`;

const DetailItem = styled.span`
  :hover {
    text-decoration: underline;
  }
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
