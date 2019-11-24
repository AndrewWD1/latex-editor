import { userActionTypes } from "./user.types";
import { findFolderContainerFileRef } from "./user.utils";

const INITIAL_STATE = {
  signedIn: false,
  name: null,
  email: null,
  Folders: [
    {
      ref: "Folder1",
      title: "Folder1",
      files: ["Folder1/File1.js", "Folder1/File2.tex"]
    }
  ],
  Files: [
    {
      ref: "Folder1/File1.js",
      title: "File1.js",
      text: "",
      pdfLink: "https://andrewwd1.github.io/Doumont_Resume.pdf"
    },
    {
      ref: "Folder1/File2.tex",
      title: "File2.tex",
      text: "",
      pdfLink: "https://andrewwd1.github.io/Doumont_Resume.pdf"
    }
  ],
  currentFolder: {
    ref: "Folder1",
    title: "Folder1",
    files: ["Folder1/File1.js", "Folder1/File2.tex"]
  },
  currentFile: {
    ref: "Folder1/File1.js",
    title: "File1.js",
    text: "",
    pdfLink: "https://andrewwd1.github.io/Doumont_Resume.pdf"
  },
  code: "",
  folderChangingName: false,
  folderChangingNameInput: "",
  fileChangingName: false,
  fileChangingNameInput: "",
  errorOnSignInOrRegister: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_OUT:
      return INITIAL_STATE;

    case userActionTypes.SET_CURRENT_USER:
      //This line is added to ensure that when user initially signs in they get there current code updated
      if (!state.email) return { ...action.payload };

      return {
        ...action.payload,
        currentFile: state.currentFile,
        currentFolder: state.currentFolder,
        code: state.code
      };

    case userActionTypes.CHANGE_TEXT:
      return {
        ...state,
        code: action.payload,
        currentFile: {
          ...state.currentFile,
          text: action.payload
        }
      };

    case userActionTypes.SWITCH_CURRENT_FILE:
      return {
        ...state,
        currentFolder:
          findFolderContainerFileRef(action.payload.file.ref, state.Folders) ||
          state.currentFolder,
        currentFile: action.payload.file,
        code: action.payload.file.text
      };

    case userActionTypes.SET_FOLDER_CHANGING_NAME:
      return {
        ...state,
        folderChangingName: action.payload.folderRef
      };

    case userActionTypes.SET_FOLDER_CHANGING_NAME_INPUT:
      return {
        ...state,
        folderChangingNameInput: action.payload.input
      };

    case userActionTypes.SET_FILE_CHANGING_NAME:
      return {
        ...state,
        fileChangingName: action.payload.file
      };

    case userActionTypes.SET_FILE_CHANGING_NAME_INPUT:
      return {
        ...state,
        fileChangingNameInput: action.payload.input
      };

    case userActionTypes.SET_ERROR_ON_SIGNIN_REGISTER:
      return {
        ...state,
        errorOnSignInOrRegister: action.payload
      };

    default:
      return state;
  }
};
