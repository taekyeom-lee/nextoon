import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

function PreViewModal({ index, dataImg }) {
  return (
    <PreviewModalBlock $index={index}>
      <PreviewModalImage>
        <ImageContainer>
          <Image src={dataImg} />
        </ImageContainer>
      </PreviewModalImage>
      <PreviewModalInfo>
        <ButtonContainer>
          <Button>
            <PlusButton />
          </Button>
          <Button>
            <LikeButton />
          </Button>
          <Button>
            <DislikeButton />
          </Button>
          <Button>
            <AngleDownButton />
          </Button>
        </ButtonContainer>
        <TextContainer>
          <TextItem>
            <Star />
            <Rating>9.95</Rating>
          </TextItem>
          {/* <TextItem>
            <MaturityRating>19</MaturityRating>
          </TextItem> */}
          <TextItem>
            <Writer>이태겸/리태겸</Writer>
          </TextItem>
        </TextContainer>
        <TagContainer>
          <TagItem>
            <Tag>무협</Tag>
          </TagItem>
          <TagItem>
            <TagSeparater>·</TagSeparater>
            <Tag>학원</Tag>
          </TagItem>
          <TagItem>
            <TagSeparater>·</TagSeparater>
            <Tag>판타지</Tag>
          </TagItem>
        </TagContainer>
      </PreviewModalInfo>
    </PreviewModalBlock>
  );
}

const handleLeftType = (index) => {
  switch (index) {
    case 0:
      return '0';
    case 5:
      return 'none';
    default:
      return '-74px';
  }
};

const PreviewModalBlock = styled.div`
  position: absolute;
  top: -126px;
  left: ${(props) => handleLeftType(props.$index)};
  right: 0;
  width: 440px;
  z-index: 100;
  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const PreviewModalImage = styled.div`
  height: 240px;
`;

// ImageContainer
const ImageContainer = styled.div``;

const Image = styled.img`
  width: 440px;
  height: 240px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const PreviewModalInfo = styled.div`
  height: 144px;
  padding: 16px;
  background-color: #141414;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

// ButtonContainer
const ButtonContainer = styled.div`
  display: flex;

  margin-bottom: 8px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 2px solid white;
  border-radius: 50%;
  margin: 4px;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-left: auto;
  }
`;

const PlusButton = styled(AiOutlinePlus)`
  width: 24px;
  height: 24px;
`;

const LikeButton = styled(AiOutlineLike)`
  width: 24px;
  height: 24px;
`;

const DislikeButton = styled(AiOutlineDislike)`
  width: 24px;
  height: 24px;
`;

const AngleDownButton = styled(FiChevronDown)`
  width: 24px;
  height: 24px;
`;

// TextContainer
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin: 12.8px 0;
`;

const TextItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const Star = styled(FaStar)`
  margin-right: 4px;
`;

const Rating = styled.span``;

// const MaturityRating = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1.2rem;
//   width: 32px;
//   height: 32px;
//   color: white;
//   background-color: red;
//   border-radius: 4px;
// `;

const Writer = styled.span``;

const TagContainer = styled.div`
  display: flex;

  margin-bottom: 8px;
`;

const TagItem = styled.div`
  padding-right: 9.6px;
`;

const Tag = styled.span``;

const TagSeparater = styled.span`
  padding-right: 9.6px;
  color: #ccc;
`;

export default PreViewModal;
