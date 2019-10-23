import { userActionTypes } from "./user.types";

import { TEST_USER } from "./testUser";

const INITIAL_STATE = {
  signedIn: false,
  firstName: null,
  lastName: null,
  email: null,
  Folders: [],
  Files: []
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN:
      return {
        ...state,
        signedIn: true
      };
    case userActionTypes.SIGN_IN_DEFAULT:
      return TEST_USER;
    default:
      return state;
  }
};
