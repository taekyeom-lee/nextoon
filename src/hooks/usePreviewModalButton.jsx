import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addMyList,
  removeMyList,
  addMyLikeList,
  removeMyLikeList,
  addMyDislikeList,
  removeMyDislikeList,
} from '../store/actions/authActions';

function usePreviewModalButton(item) {
  const [plusButtonIsSelected, setPlusButtonIsSelected] = useState(false);
  const [likeButtonIsSelected, setLikeButtonIsSelected] = useState(false);
  const [dislikeButtonIsSelected, setDislikeButtonIsSelected] = useState(false);
  const [angleDownButtonIsSelected, setAngleDownButtonIsSelected] =
    useState(false);

  const dispatch = useDispatch();

  const selected = useSelector((state) => state.auth);

  const clickPlusButton = () => {
    setPlusButtonIsSelected((prevState) => !prevState);

    !plusButtonIsSelected
      ? dispatch(addMyList(item))
      : dispatch(removeMyList(item));
  };

  const clickLikeButton = () => {
    setLikeButtonIsSelected((prevState) => !prevState);

    // like가 true일때
    !likeButtonIsSelected
      ? dispatch(addMyLikeList(item))
      : dispatch(removeMyLikeList(item));

    if (dislikeButtonIsSelected) {
      setDislikeButtonIsSelected((prevState) => !prevState);
      dispatch(removeMyDislikeList(item));
    }
  };

  const clickDislikeButton = () => {
    setDislikeButtonIsSelected((prevState) => !prevState);

    // dislike가 true일때
    !dislikeButtonIsSelected
      ? dispatch(addMyDislikeList(item))
      : dispatch(removeMyDislikeList(item));

    if (likeButtonIsSelected) {
      setLikeButtonIsSelected((prevState) => !prevState);
      dispatch(removeMyLikeList(item));
    }
  };

  const clickAngleDownButton = () => {
    setAngleDownButtonIsSelected((prevState) => !prevState);
  };

  useEffect(() => {
    const initPlusState = selected.myList.find(
      (myListItem) => myListItem.id === item.id
    )
      ? true
      : false;

    const initLikeState = selected.myLikeList.find(
      (myLikeListItem) => myLikeListItem.id === item.id
    )
      ? true
      : false;

    const initDislikeState = selected.myDislikeList.find(
      (myDislikeListItem) => myDislikeListItem.id === item.id
    )
      ? true
      : false;

    setPlusButtonIsSelected(initPlusState);
    setLikeButtonIsSelected(initLikeState);
    setDislikeButtonIsSelected(initDislikeState);
  }, [
    setPlusButtonIsSelected,
    setLikeButtonIsSelected,
    setDislikeButtonIsSelected,
    selected.myList,
    selected.myLikeList,
    selected.myDislikeList,
    item.id,
  ]);

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
