import { dropdownMenuChange } from "./dropdown-menu.types";

export const changeDropdowns = dropdown => ({
  type: dropdownMenuChange.CHANGE_DROPDOWNS,
  payload: dropdown
});
