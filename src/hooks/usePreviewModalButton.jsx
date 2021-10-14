import { useState } from 'react';

function usePreviewModalButton() {
  const [plusButtonIsSelected, setPlusButtonIsSelected] = useState(false);
  const [likeButtonIsSelected, setLikeButtonIsSelected] = useState(false);
  const [dislikeButtonIsSelected, setDislikeButtonIsSelected] = useState(false);
  const [angleDownButtonIsSelected, setAngleDownButtonIsSelected] = useState(false);

  const clickPlusButton = () => {
    setPlusButtonIsSelected((prevState) => !prevState);
  };

  const clickLikeButton = () => {
    setLikeButtonIsSelected((prevState) => !prevState);
    dislikeButtonIsSelected &&
      setDislikeButtonIsSelected((prevState) => !prevState);
  };

  const clickDislikeButton = () => {
    setDislikeButtonIsSelected((prevState) => !prevState);
    likeButtonIsSelected && setLikeButtonIsSelected((prevState) => !prevState);
  };

  const clickAngleDownButton = () => {
    setAngleDownButtonIsSelected((prevState) => !prevState);
  };

  return {
    plusButtonIsSelected,
    likeButtonIsSelected,
    dislikeButtonIsSelected,
    angleDownButtonIsSelected,
    clickPlusButton,
    clickLikeButton,
    clickDislikeButton,
    clickAngleDownButton,
  };
}

export default usePreviewModalButton;
