import React from "react";
import { connect } from "react-redux";
import { toggleFolders } from "../../redux/screen/screen.actions";
import { saveTextToFile, signOut } from "../../redux/user/user.actions";
import "./files-menu.styles.scss";

const FilesMenu = ({ toggleFolders, saveTextToFile, signOut }) => {
  const initialOptions = {
    Save: saveTextToFile,
    Folders: toggleFolders,
    "Other Options": () => {},
    "Sign Out": signOut
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
  signOut: () => dispatch(signOut()),
  toggleFolders: () => dispatch(toggleFolders()),
  saveTextToFile: () => dispatch(saveTextToFile())
});

export default connect(
  null,
  mapDispatchToProps
)(FilesMenu);
