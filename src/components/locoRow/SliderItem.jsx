import styled from 'styled-components';

import girl from '../../img/girl.jpg';

function SliderItem() {
  return (
    <SliderItemBlock>
      <TitleCard src={girl} alt="title-card" />
      <TitleCard src={girl} alt="title-card" />
      <TitleCard src={girl} alt="title-card" />
      <TitleCard src={girl} alt="title-card" />
      <TitleCard src={girl} alt="title-card" />
      <TitleCard src={girl} alt="title-card" />
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div``;

const TitleCard = styled.img`
  width: 16.45%;
  padding: 0 2px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

export default SliderItem;
