import { TextActionTypes } from "./files.types";

const defaultFolders = {
  Folder1: {
    File1:
      'import React from "react";\r\nimport { connect } from "react-redux";\r\nimport { toggleFolders } from "../../redux/screen/screen.actions";\r\nimport "./files-menu.styles.scss";\r\n\r\nconst FilesMenu = ({ toggleFolders }) => {\r\n  const initialOptions = {\r\n    Save: () => {},\r\n    Folders: toggleFolders,\r\n    Profile: () => {},\r\n    "Other Options": () => {}\r\n  };\r\n\r\n  return (\r\n    <div className="files-menu">\r\n      <div className="files-items">\r\n        {Object.keys(initialOptions).map(item => (\r\n          <div key={item} className="files-item" onClick={initialOptions[item]}>\r\n            {item}\r\n          </div>\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nconst mapDispatchToProps = dispatch => ({\r\n  toggleFolders: () => dispatch(toggleFolders())\r\n});\r\n\r\nexport default connect(\r\n  null,\r\n  mapDispatchToProps\r\n)(FilesMenu);\r\n',
    File2: "",
    File3: ""
  },
  Folder2: { File1: "", File2: "", File3: "" }
};

const INITIAL_STATE = {
  userFolders: defaultFolders,
  currentFolder: "Folder1",
  currentFile: "File1",
  code: defaultFolders.Folder1.File1
};

export const folderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TextActionTypes.CHANGE_TEXT:
      return {
        ...state,
        code: action.payload
      };
    case TextActionTypes.SAVE_TEXT_TO_FILE:
      return {
        ...state,
        userFolders: {
          ...state.userFolders,
          [state.currentFolder]: {
            ...state.userFolders[state.currentFolder],
            [state.currentFile]: state.code
          }
        }
      };
    case TextActionTypes.SWITCH_CURRENT_FILE:
      return {
        ...state,
        currentFolder: action.payload.folder,
        currentFile: action.payload.file,
        code: state.userFolders[action.payload.folder][action.payload.file]
      };
    default:
      return state;
  }
};
