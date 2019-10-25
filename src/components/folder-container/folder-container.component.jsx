import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleFolders } from "../../redux/screen/screen.actions";
import { addFolder } from "../../redux/user/user.actions";
import "./folder-container.styles.scss";
import { ReactComponent as AddFolder } from "../icons/add-folder.svg";

import Folder from "../folder/folder.component";

const FolderContainer = ({
  userFolders,
  toggleFolders,
  foldersToggle,
  addFolder
}) => {
  const [folderChangingName, setFolderChangingName] = useState(false);
  const [folderChangingNameInput, setFolderChangingNameInput] = useState("");
  if (!foldersToggle) return null;

  return (
    <div className="folder-container">
      <div>
        <div className="folder-container-title">
          Folders
          <AddFolder style={{ cursor: "pointer" }} onClick={addFolder} />
        </div>
        {Object.values(userFolders).map(folder => (
          <Folder
            key={folder.id}
            folderName={folder.title}
            folderID={folder.id}
            folderFiles={folder.files}
            folderChangingName={folderChangingName}
            setFolderChangingName={setFolderChangingName}
            folderChangingNameInput={folderChangingNameInput}
            setFolderChangingNameInput={setFolderChangingNameInput}
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
  toggleFolders: () => dispatch(toggleFolders()),
  addFolder: () => dispatch(addFolder())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderContainer);
