import styled from 'styled-components';

function MySliderItem({ item }) {
  return (
    <MySliderItemBlock>
      <TitleCardContainer>
        <TitleCard src={item.img} alt="title-card" />
      </TitleCardContainer>
    </MySliderItemBlock>
  );
}

const MySliderItemBlock = styled.div`
  // position: relative;
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
