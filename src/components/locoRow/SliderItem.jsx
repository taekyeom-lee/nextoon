import styled from 'styled-components';

function SliderItem({ dataImg }) {
  return (
    <SliderItemBlock>
      <TitleCard src={dataImg} alt="title-card" />
    </SliderItemBlock>
  );
}

const SliderItemBlock = styled.div`
  padding: 0 2px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`;

const TitleCard = styled.img`
  // width: 16.45%;
  width: 292px;
  height: 164px;
  object-fit: cover;
`;

export default SliderItem;
