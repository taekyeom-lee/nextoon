import * as authActions from '../actions/authActions';

const initState = {
  email: '',
  myList: [],
  myLikeList: [],
  myDislikeList: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.AUTH_SET_EMAIL_ADDRESS:
      return {
        ...state,
        email: action.email,
      };
    case authActions.AUTH_ADD_MY_LIST:
      return {
        ...state,
        myList: state.myList.concat(action.item),
      };
    case authActions.AUTH_REMOVE_MY_LIST:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.item.id),
      };
    case authActions.AUTH_ADD_MY_LiKE_LIST:
      return {
        ...state,
        myLikeList: state.myLikeList.concat(action.item),
      };
    case authActions.AUTH_REMOVE_MY_LiKE_LIST:
      return {
        ...state,
        myLikeList: state.myLikeList.filter(
          (item) => item.id !== action.item.id
        ),
      };
    case authActions.AUTH_ADD_MY_DISLIKE_LIST:
      return {
        ...state,
        myDislikeList: state.myDislikeList.concat(action.item),
      };
    case authActions.AUTH_REMOVE_MY_DISLIKE_LIST:
      return {
        ...state,
        myDislikeList: state.myDislikeList.filter(
          (item) => item.id !== action.item.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
