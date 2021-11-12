export const AUTH_SET_EMAIL_ADDRESS = 'AUTH.SET_EMAIL_ADDRESS';
export const AUTH_ADD_MY_LIST = 'AUTH.ADD_MY_LIST';
export const AUTH_REMOVE_MY_LIST = 'AUTH.REMOVE_MY_LIST';

export const setEmailAddress = (email) => {
  return {
    type: AUTH_SET_EMAIL_ADDRESS,
    email,
  };
};

export const addMyList = (data) => {
  return {
    type: AUTH_ADD_MY_LIST,
    data,
  };
};

export const removeMyList = (data) => {
  return {
    type: AUTH_REMOVE_MY_LIST,
    data,
  };
};
