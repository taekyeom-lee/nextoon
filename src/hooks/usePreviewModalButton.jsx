import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addMyList, removeMyList } from '../store/actions/authActions';

function usePreviewModalButton(data) {
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
      ? dispatch(addMyList(data))
      : dispatch(removeMyList(data));
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

  useEffect(() => {
    const initState = selected.mylist.find((item) => item.id === data.id)
      ? true
      : false;

    setPlusButtonIsSelected(initState);
  }, [setPlusButtonIsSelected, data.id, selected.mylist]);

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
