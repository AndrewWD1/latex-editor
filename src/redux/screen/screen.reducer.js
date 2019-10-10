import { screenActionTypes } from "./screen.types";

const INITIAL_STATE = {
  windowHeight: window.innerHeight,
  windowWidth: window.innerWidth
};

export const screenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case screenActionTypes.HANDLE_RESIZE:
      return {
        ...state,
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
      };
    default:
      return state;
  }
};
