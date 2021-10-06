import styled from 'styled-components';

import girl2 from '../../img/girl2.jpg';
import girl3 from '../../img/girl3.jpg';
import girl4 from '../../img/girl4.jpg';
import girl5 from '../../img/girl5.jpg';
import girl6 from '../../img/girl6.jpg';
import girl7 from '../../img/girl7.jpg';

function MoreLikeContainer() {
  return (
    <MoreLikeContainerBlock>
      <MoreLikeText>비슷한 콘텐츠</MoreLikeText>
      <TitleCardList>
        <TitleCard>
          <TitleCardImage src={girl2} />
          <TitleCardText>
            Blur Blur Blur Blur Blur... Blur Blur Blur Blur Blur... Blur Blur
            Blur Blur Blur... Blur Blur Blur Blur Blur...
          </TitleCardText>
        </TitleCard>
        <TitleCard>
          <TitleCardImage src={girl3} />
          <TitleCardText>
            Blur Blur Blur Blur Blur... Blur Blur Blur Blur Blur... Blur Blur
            Blur Blur Blur... Blur Blur Blur Blur Blur...
          </TitleCardText>
        </TitleCard>
        <TitleCard>
          <TitleCardImage src={girl4} />
          <TitleCardText>
            Blur Blur Blur Blur Blur... Blur Blur Blur Blur Blur... Blur Blur
            Blur Blur Blur... Blur Blur Blur Blur Blur...
          </TitleCardText>
        </TitleCard>
        <TitleCard>
          <TitleCardImage src={girl5} />
          <TitleCardText>
            Blur Blur Blur Blur Blur... Blur Blur Blur Blur Blur... Blur Blur
            Blur Blur Blur... Blur Blur Blur Blur Blur...
          </TitleCardText>
        </TitleCard>
        <TitleCard>
          <TitleCardImage src={girl6} />
          <TitleCardText>
            Blur Blur Blur Blur Blur... Blur Blur Blur Blur Blur... Blur Blur
            Blur Blur Blur... Blur Blur Blur Blur Blur...
          </TitleCardText>
        </TitleCard>
        <TitleCard>
          <TitleCardImage src={girl7} />
          <TitleCardText>
            Blur Blur Blur Blur Blur... Blur Blur Blur Blur Blur... Blur Blur
            Blur Blur Blur... Blur Blur Blur Blur Blur...
          </TitleCardText>
        </TitleCard>
      </TitleCardList>
    </MoreLikeContainerBlock>
  );
}

const MoreLikeContainerBlock = styled.div`
  padding-bottom: 32px;
`;

const MoreLikeText = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin: 48px 0 22px 0;
`;

const TitleCardList = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr 1fr;
`;

const TitleCard = styled.div`
  width: 240px;
  margin: 0.1em;
  border-radius: 4px;
  background-color: #2f2f2f;
`;

const TitleCardImage = styled.img`
  width: 240px;
  height: 144px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const TitleCardText = styled.p`
  margin: 0;
  padding: 16px;
  color: #d2d2d2;
`;

export default MoreLikeContainer;
