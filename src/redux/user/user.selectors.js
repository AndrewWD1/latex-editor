import { createSelector } from "reselect";
import * as R from "ramda";

const selectUser = state => state.user;

export const selectUserFiles = createSelector(
  [selectUser],
  user => user.Files
);

export const selectFileByRef = ref =>
  createSelector(
    [selectUserFiles],
    Files => R.find(R.propEq("ref", ref))(Files)
  );
