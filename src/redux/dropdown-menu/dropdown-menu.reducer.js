import { dropdownMenuChange, dropdownMenuDropped } from "./dropdown-menu.types";

const INITIAL_STATE = {
  dropdownMenuClicked: dropdownMenuChange.DROPDOWNS_CLOSED
};

export const dropdownMenuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dropdownMenuChange.CHANGE_DROPDOWNS:
      if (action.payload === state.dropdownMenuClicked) {
        return {
          ...state,
          dropdownMenuClicked: dropdownMenuDropped.DROPDOWNS_CLOSED
        };
      } else {
        return {
          ...state,
          dropdownMenuClicked: action.payload
        };
      }

    default:
      return state;
  }
};
