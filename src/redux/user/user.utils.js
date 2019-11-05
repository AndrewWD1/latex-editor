export const findFolderContainerFileRef = (fileRef, Folders) => {
  for (const folder of Folders) {
    if (folder.files.includes(fileRef)) return folder;
  }
  return 0;
};
