import React from "react";
import { connect } from "react-redux";
import { toggleFolders } from "../../redux/screen/screen.actions";
import "./folder-container.styles.scss";

import Folder from "../folder/folder.component";

const FolderContainer = ({ userFolders, toggleFolders, foldersToggle }) => {
  if (!foldersToggle) return null;
  return (
    <div className="folder-container">
      <div>
        {Object.keys(userFolders).map(folder => (
          <Folder
            key={folder}
            folderName={folder}
            folderFiles={userFolders[folder]}
          />
        ))}
      </div>
      <span className="arrow-span">
        <div className="arrow-container" onClick={toggleFolders}>
          &#10132;
        </div>
      </span>
    </div>
  );
};

const mapStateToProps = state => ({
  userFolders: state.folders.userFolders,
  foldersToggle: state.screen.foldersToggle
});

const mapDispatchToProps = dispatch => ({
  toggleFolders: () => dispatch(toggleFolders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderContainer);
