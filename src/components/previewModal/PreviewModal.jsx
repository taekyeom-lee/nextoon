import styled from 'styled-components';
import {
  AiOutlinePlus,
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineCheck,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import usePreviewModalButton from '../../hooks/usePreviewModalButton';

function PreViewModal({ index, dataImg }) {
  const {
    plusButtonIsSelected,
    likeButtonIsSelected,
    dislikeButtonIsSelected,
    clickPlusButton,
    clickLikeButton,
    clickDislikeButton,
    clickAngleDownButton,
  } = usePreviewModalButton();

  return (
    <PreviewModalBlock $index={index}>
      <PreviewModalImage>
        <ImageContainer>
          <Image src={dataImg} />
        </ImageContainer>
      </PreviewModalImage>
      <PreviewModalInfo>
        <ButtonContainer>
          <Button
            onClick={clickPlusButton}
            $buttonIsSelected={plusButtonIsSelected}
          >
            {plusButtonIsSelected ? <CheckButton /> : <PlusButton />}
          </Button>
          <Button
            onClick={clickLikeButton}
            $buttonIsSelected={likeButtonIsSelected}
          >
            {likeButtonIsSelected ? <FillLikeButton /> : <LikeButton />}
          </Button>
          <Button
            onClick={clickDislikeButton}
            $buttonIsSelected={dislikeButtonIsSelected}
          >
            {dislikeButtonIsSelected ? (
              <FillDislikeButton />
            ) : (
              <DislikeButton />
            )}
          </Button>
          <Button onClick={clickAngleDownButton}>
            <AngleDownButton />
          </Button>
        </ButtonContainer>
        <TextContainer>
          <TextItem>
            <Star />
            <Rating>9.95</Rating>
          </TextItem>
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

const handleTransformType = (index) => {
  switch (index % 6) {
    case 0:
      return 'translateX(-70px) scale(0.7)';
    case 5:
      return 'translateX(70px) scale(0.7)';
    default:
      return 'scale(0.7)';
  }
};

const handleTransformHoverType = (index) => {
  switch (index % 6) {
    case 0:
      return 'translateX(0px) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)';
    case 5:
      return 'translateX(0px) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)';
    default:
      return 'none';
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
  transform: ${(props) => handleTransformType(props.$index)};

  :hover {
    cursor: pointer;
    transform-origin: center center;
    transition: transform 0.5s;
    transform: ${(props) => handleTransformHoverType(props.$index)};
  }
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
  border: ${(props) =>
    props.$buttonIsSelected ? '2px solid white' : '2px solid #c0c0c0'};
  border-radius: 50%;
  margin: 4px;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-left: auto;
  }

  :hover {
    border: 2px solid white;
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

const CheckButton = styled(AiOutlineCheck)`
  width: 24px;
  height: 24px;
`;

const FillLikeButton = styled(AiFillLike)`
  width: 24px;
  height: 24px;
`;

const FillDislikeButton = styled(AiFillDislike)`
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
