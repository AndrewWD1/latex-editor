import React from "react";
import { connect } from "react-redux";
import { toggleFolders } from "../../redux/screen/screen.actions";
import { saveTextToFile } from "../../redux/files/files.actions";
import "./files-menu.styles.scss";

const FilesMenu = ({ toggleFolders, saveTextToFile }) => {
  const initialOptions = {
    Save: saveTextToFile,
    Folders: toggleFolders,
    Profile: () => {},
    "Other Options": () => {}
  };

  return (
    <div className="files-menu">
      <div className="files-items">
        {Object.keys(initialOptions).map(item => (
          <div key={item} className="files-item" onClick={initialOptions[item]}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFolders: () => dispatch(toggleFolders()),
  saveTextToFile: () => dispatch(saveTextToFile())
});

export default connect(
  null,
  mapDispatchToProps
)(FilesMenu);
