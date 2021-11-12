import * as authActions from '../actions/authActions';

const initState = {
  email: '',
  mylist: [],
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
        mylist: state.mylist.concat(action.data),
      };
    case authActions.AUTH_REMOVE_MY_LIST:
      return {
        ...state,
        mylist: state.mylist.filter((data) => data.id !== action.data.id),
      };
    default:
      return state;
  }
};

export default reducer;
