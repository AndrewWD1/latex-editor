import { createSelector } from "reselect";

const find = cb => arr => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) return arr[i];
  }
  return undefined;
};

const selectUser = state => state.user;

export const selectUserFiles = createSelector(
  [selectUser],
  user => user.Files
);

export const selectFileByRef = ref =>
  createSelector(
    [selectUserFiles],
    Files => find(o => o.ref === ref)(Files)
  );
