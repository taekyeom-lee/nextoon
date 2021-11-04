import * as authActions from '../actions/authActions';

const initState = {
  email: '',
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.AUTH_SET_EMAIL_ADDRESS:
      return {
        ...state,
        email: action.email,
      };
    // case authActions.AUTH_RESET_EMAIL:
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
};

export default reducer;
