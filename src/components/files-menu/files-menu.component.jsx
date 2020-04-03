import React from "react";
import { connect } from "react-redux";
import { toggleFolders } from "../../redux/screen/screen.actions";
import { saveTextToFile, signOut } from "../../redux/user/user.actions";
import "./files-menu.styles.scss";

const FilesMenu = ({ toggleFolders, saveTextToFile, signOut, width }) => {
  const initialOptions = {
    Save: saveTextToFile,
    Folders: toggleFolders,
    "Sign Out": signOut
  };

  return (
    <div className={`files-menu ${width < 860 && "files-menu--small"}`}>
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

const mapStateToProps = state => ({
  width: state.screen.windowWidth
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
  toggleFolders: () => dispatch(toggleFolders()),
  saveTextToFile: () => dispatch(saveTextToFile())
});

export default connect(mapStateToProps, mapDispatchToProps)(FilesMenu);
