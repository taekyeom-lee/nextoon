import styled from 'styled-components';

import girl from '../../../img/girl.jpg';

function EpisodeCard({ index }) {
  return (
    <EpisodeCardBlock>
      <TitleIndex>{index}</TitleIndex>
      <TitleCard src={girl} />
      <TextWrapper>
        <Title>나는 창원의 착한 남자</Title>
        <Date>21.10.07</Date>
      </TextWrapper>
    </EpisodeCardBlock>
  );
}

const EpisodeCardBlock = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid silver;
  padding: 16px;

  &:first-child {
    border-top: 1px solid silver;
  }
`;

const TitleIndex = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  color: #d2d2d2;
  flex: 0 0 7%;
`;

const TitleCard = styled.img`
  width: 144px;
  height: 80px;
  object-fit: cover;
`;

const TextWrapper = styled.div`
  // display: flex;
  flex: 0 0 70%;
`;

const Title = styled.div`
  font-size: 1em;
  padding: 1em;
  padding-bottom: 0.5em;
`;

const Date = styled.div`
  font-size: 0.8em;
  padding: 0 1.2em 1em;
  color: #d2d2d2;
`;

export default EpisodeCard;
