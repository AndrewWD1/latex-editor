import { createSelector } from "reselect";
import * as R from "ramda";

const selectUser = state => state.user;

export const selectUserFiles = createSelector(
  [selectUser],
  user => user.Files
);

export const selectFileById = id =>
  createSelector(
    [selectUserFiles],
    Files => R.find(R.propEq("id", id))(Files)
  );
