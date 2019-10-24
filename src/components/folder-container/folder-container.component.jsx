import React from "react";
import { connect } from "react-redux";
import { toggleFolders } from "../../redux/screen/screen.actions";
import "./folder-container.styles.scss";
import { ReactComponent as AddFolder } from "../icons/add-folder.svg";

import Folder from "../folder/folder.component";

const FolderContainer = ({ userFolders, toggleFolders, foldersToggle }) => {
  if (!foldersToggle) return null;
  return (
    <div className="folder-container">
      <div>
        <div className="folder-container-title">
          Folders
          <AddFolder style={{ cursor: "pointer" }} />
        </div>
        {Object.values(userFolders).map(folder => (
          <Folder
            key={folder.id}
            folderName={folder.title}
            folderFiles={folder.files}
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
  userFolders: state.user.Folders,
  foldersToggle: state.screen.foldersToggle
});

const mapDispatchToProps = dispatch => ({
  toggleFolders: () => dispatch(toggleFolders())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderContainer);
