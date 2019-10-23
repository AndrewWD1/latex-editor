import { userActionTypes } from "./user.types";

export const signIn = () => ({
  type: userActionTypes.SIGN_IN
});
export const signInDefault = () => ({
  type: userActionTypes.SIGN_IN_DEFAULT
});
