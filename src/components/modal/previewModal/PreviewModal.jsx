import { useEffect } from 'react';
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

import usePreviewModalButton from '../../../hooks/usePreviewModalButton';

function PreViewModal({
  index,
  data,
  relativeTop,
  relativeLeft,
  pageNumber,
  width,
  height,
  totalWidth,
  propFunction,
}) {
  const {
    plusButtonIsSelected,
    likeButtonIsSelected,
    dislikeButtonIsSelected,
    angleDownButtonIsSelected,
    clickPlusButton,
    clickLikeButton,
    clickDislikeButton,
    clickAngleDownButton,
  } = usePreviewModalButton(data);

  useEffect(() => {
    propFunction(angleDownButtonIsSelected);
  });

  return (
    <PreviewModalBlock
      $index={index}
      $relativeTop={relativeTop}
      $relativeLeft={relativeLeft}
      $pageNumber={pageNumber}
      $width={width}
      $totalWidth={totalWidth}
    >
      <PreviewModalImage>
        <ImageContainer $width={width} $height={height}>
          <Image src={data.img} />
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
            <Rating>{data.rating}</Rating>
          </TextItem>
          <TextItem>
            {data.writer.map((writer, index) =>
              writer.map(
                (penName, index) =>
                  index !== 0 && <Writer key={index}>{penName}</Writer>
              )
            )}
          </TextItem>
        </TextContainer>
        <TagContainer>
          {data.tags.map((tag, index) => (
            <TagItem key={index}>
              {index !== 0 && <TagSeparater>·</TagSeparater>}
              <Tag>{tag}</Tag>
            </TagItem>
          ))}
        </TagContainer>
      </PreviewModalInfo>
    </PreviewModalBlock>
  );
}

const handleLeftType = (relativeLeft, pageNumber, width, totalWidth) => {
  const left = relativeLeft - (totalWidth - 60 * 2 - 17) * (pageNumber - 1);

  return `calc((((${
    width * 1.5
  }px - ${width}px) / 2) * -1) + ${left}px + 60px)`;
};

const handleTransformHoverType = (index, width) => {
  const x = Math.floor((width * 1.5 - width) / 2);

  switch (index % 6) {
    case 0:
      return `translateX(${x}px) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)`;
    case 5:
      return `translateX(-${x}px) translateY(0px) scaleX(1) scaleY(1) translateZ(0px)`;
    default:
      return 'none';
  }
};

const PreviewModalBlock = styled.div`
  position: absolute;
  top: calc(${(props) => props.$relativeTop + 'px'} - 126px);
  left: ${(props) =>
    handleLeftType(
      props.$relativeLeft,
      props.$pageNumber,
      props.$width,
      props.$totalWidth
    )};
  width: calc(${(props) => props.$width * 1.5}px);
  z-index: 20;
  box-shadow: rgb(0 0 0 / 75%) 0px 3px 10px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transform: scale(0.6666666666666667);

  :hover {
    cursor: pointer;
    transform-origin: center center;
    transition: transform 0.5s;
    transform: ${(props) =>
      handleTransformHoverType(props.$index, props.$width)};
  }
`;

const PreviewModalImage = styled.div``;

// ImageContainer
const ImageContainer = styled.div`
  width: calc(${(props) => props.$width * 1.5}px);
  height: calc(${(props) => props.$height * 1.5}px);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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

const Writer = styled.span`
  padding-right: 8px;

  &:last-child {
    padding: 0px;
  }
`;

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
