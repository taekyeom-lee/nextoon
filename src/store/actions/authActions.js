export const AUTH_SET_EMAIL_ADDRESS = 'AUTH.SET_EMAIL_ADDRESS';

// myList
export const AUTH_ADD_MY_LIST = 'AUTH.ADD_MY_LIST';
export const AUTH_REMOVE_MY_LIST = 'AUTH.REMOVE_MY_LIST';

// myLikeList
export const AUTH_ADD_MY_LiKE_LIST = 'AUTH.ADD_MY_LiKE_LIST';
export const AUTH_REMOVE_MY_LiKE_LIST = 'AUTH.REMOVE_MY_LiKE_LIST';

// myDislkieList
export const AUTH_ADD_MY_DISLIKE_LIST = 'AUTH.ADD_MY_DISLIKE_LIST';
export const AUTH_REMOVE_MY_DISLIKE_LIST = 'AUTH.REMOVE_MY_DISLIKE_LIST';

export const setEmailAddress = (email) => {
  return {
    type: AUTH_SET_EMAIL_ADDRESS,
    email,
  };
};

// myList
export const addMyList = (item) => {
  return {
    type: AUTH_ADD_MY_LIST,
    item,
  };
};

export const removeMyList = (item) => {
  return {
    type: AUTH_REMOVE_MY_LIST,
    item,
  };
};

// myLikeList
export const addMyLikeList = (item) => {
  return {
    type: AUTH_ADD_MY_LiKE_LIST,
    item,
  };
};

export const removeMyLikeList = (item) => {
  return {
    type: AUTH_REMOVE_MY_LiKE_LIST,
    item,
  };
};

// myDislikeList
export const addMyDislikeList = (item) => {
  return {
    type: AUTH_ADD_MY_DISLIKE_LIST,
    item,
  };
};

export const removeMyDislikeList = (item) => {
  return {
    type: AUTH_REMOVE_MY_DISLIKE_LIST,
    item,
  };
};
