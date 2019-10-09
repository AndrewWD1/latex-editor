import { TextActionTypes } from "./text.types";

const INITIAL_STATE = {
  code: "// type your code.."
};

export const textReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TextActionTypes.CHANGE_TEXT:
      return {
        ...state,
        code: action.payload
      };
    default:
      return state;
  }
};
