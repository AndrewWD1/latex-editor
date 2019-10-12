import React from "react";
import { connect } from "react-redux";
import "./folder-container.styles.scss";

import Folder from "../folder/folder.component";

const FolderContainer = ({ height, width, userFolders }) => {
  return (
    <div
      className="folder-container"
      style={{ height: `${height}px`, width: `${width}px` }}
    >
      {Object.keys(userFolders).map(folder => (
        <Folder
          key={folder}
          folderName={folder}
          folderFiles={userFolders[folder]}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  userFolders: state.folders.userFolders
});

export default connect(mapStateToProps)(FolderContainer);
