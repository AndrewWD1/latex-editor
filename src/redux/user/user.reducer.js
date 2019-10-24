import * as R from "ramda";
import { userActionTypes } from "./user.types";
import { TEST_USER } from "./testUser";

const INITIAL_STATE = {
  signedIn: false,
  firstName: null,
  lastName: null,
  email: null,
  Folders: [
    {
      id: "Folder1",
      title: "Folder1",
      files: ["Folder1/File1.js", "Folder1/File2.tex"]
    }
  ],
  Files: [
    {
      id: "Folder1/File1.js",
      title: "File1.js",
      text: "",
      pdfLink: "https://andrewwd1.github.io/Doumont_Resume.pdf"
    },
    {
      id: "Folder1/File2.tex",
      title: "File1.js",
      text: "",
      pdfLink: "https://andrewwd1.github.io/Doumont_Resume.pdf"
    }
  ],
  currentFile: {
    id: "Folder1/File1.js",
    title: "File1.js",
    text: "",
    pdfLink: "https://andrewwd1.github.io/Doumont_Resume.pdf"
  },
  code: ""
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN:
      return {
        ...state,
        signedIn: true
      };

    case userActionTypes.SIGN_IN_DEFAULT:
      return TEST_USER;
    case userActionTypes.CHANGE_TEXT:
      return {
        ...state,
        code: action.payload
      };

    case userActionTypes.SAVE_TEXT_TO_FILE:
      return {
        ...state,
        currentFile: {
          ...state.currentFile,
          text: state.code
        },
        Files: R.adjust(
          state.Files.map(n => n.id).indexOf(state.currentFile.id),
          o => ({ ...o, text: state.code }),
          state.Files
        )
      };

    case userActionTypes.SWITCH_CURRENT_FILE:
      return {
        ...state,
        currentFile: action.payload.file,
        code: action.payload.file.text
      };

    case userActionTypes.ADD_FILE:
      const len = state.Files.length;
      return {
        ...state,
        Folders: R.adjust(
          R.findIndex(R.propEq("id", action.payload.folder), state.Folders),
          f => {
            return {
              ...f,
              files: [...f.files, `${len}${f.id}/NewFile.tex`]
            };
          },
          state.Folders
        ),
        Files: [
          ...state.Files,
          {
            id: `${len}${action.payload.folder}/NewFile.tex`,
            title: `NewFile.tex`,
            text: "",
            pdfLink: "https://andrewwd1.github.io/Doumont_Resume.pdf"
          }
        ]
      };

    case userActionTypes.CHANGE_FILE_NAME:
      return {
        ...state,
        Files: R.adjust(
          R.findIndex(R.propEq("id", action.payload.id), state.Files),
          file => ({ ...file, title: action.payload.newName }),
          state.Files
        )
      };
    default:
      return state;
  }
};
