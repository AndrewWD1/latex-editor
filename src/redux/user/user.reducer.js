import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  signedIn: false,
  firstName: null,
  lastName: null,
  email: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN:
      return {
        ...state,
        signedIn: true
      };
    default:
      return state;
  }
};
