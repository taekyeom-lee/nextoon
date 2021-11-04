export const AUTH_SET_EMAIL_ADDRESS = 'AUTH.SET_EMAIL_ADDRESS';
// export const AUTH_RESET_EMAIL = 'AUTH.RESET_EMAIL';

export const setEmailAddress = (email) => {
  return {
    type: AUTH_SET_EMAIL_ADDRESS,
    email,
  };
};

// export const resetEmail = () => {
//   return {
//     type: AUTH_RESET_EMAIL,
//   };
// };
