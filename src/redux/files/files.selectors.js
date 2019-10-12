import { createSelector } from "reselect";

const selectFolders = state => state.folders;

export const selectPDFLinks = createSelector(
  [selectFolders],
  folders => folders.pdfLinks
);

export const selectPDFLink = (folder, file) =>
  createSelector(
    [selectPDFLinks],
    pdfLinks => pdfLinks[folder][file]
  );
