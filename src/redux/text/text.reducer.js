import { TextActionTypes } from "./text.types";

const INITIAL_STATE = {
  code:
    'import React from "react";\r\nimport { connect } from "react-redux";\r\nimport { toggleFolders } from "../../redux/screen/screen.actions";\r\nimport "./files-menu.styles.scss";\r\n\r\nconst FilesMenu = ({ toggleFolders }) => {\r\n  const initialOptions = {\r\n    Save: () => {},\r\n    Folders: toggleFolders,\r\n    Profile: () => {},\r\n    "Other Options": () => {}\r\n  };\r\n\r\n  return (\r\n    <div className="files-menu">\r\n      <div className="files-items">\r\n        {Object.keys(initialOptions).map(item => (\r\n          <div key={item} className="files-item" onClick={initialOptions[item]}>\r\n            {item}\r\n          </div>\r\n        ))}\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nconst mapDispatchToProps = dispatch => ({\r\n  toggleFolders: () => dispatch(toggleFolders())\r\n});\r\n\r\nexport default connect(\r\n  null,\r\n  mapDispatchToProps\r\n)(FilesMenu);\r\n'
};

export const textReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TextActionTypes.CHANGE_TEXT:
      return {
        ...state,
        code: action.payload
      };
    default:
      return state;
  }
};
