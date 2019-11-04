import { userActionTypes } from "./user.types";

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
  fileChangingNameInput: ""
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return action.payload;

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

    default:
      return state;
  }
};
