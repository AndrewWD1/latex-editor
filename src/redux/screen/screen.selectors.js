import { createSelector } from "reselect";

const selectScreen = state => state.screen;

export const selectDynamicWidth = createSelector(
  [selectScreen],
  screen =>
    screen.foldersToggle ? screen.windowWidth - 200 : screen.windowWidth
);
