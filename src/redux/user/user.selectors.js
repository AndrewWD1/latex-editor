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

export const selectCurrentFolder = createSelector(
  [selectUser],
  user => user.currentFolder
);

export const selectCurrentFolderRef = createSelector(
  [selectCurrentFolder],
  currentFolder => currentFolder.ref
);

export const selectCurrentFile = createSelector(
  [selectUser],
  user => user.currentFile
);

export const selectCurrentFileRef = createSelector(
  [selectCurrentFile],
  currentFile => currentFile.ref
);

export const selectFileByRef = ref =>
  createSelector(
    [selectUserFiles],
    Files => find(o => o.ref === ref)(Files)
  );
