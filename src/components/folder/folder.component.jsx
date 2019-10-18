import React, { useState } from "react";
import { connect } from "react-redux";
import { switchCurrentFile } from "../../redux/files/files.actions";
import { ReactComponent as ClosedFolderIcon } from "../icons/closed-folder.svg";
import { ReactComponent as OpenFolderIcon } from "../icons/open-folder.svg";
import { ReactComponent as TexFile } from "../icons/tex-file.svg";
import { ReactComponent as JSFile } from "../icons/js-file.svg";

import "./folder.styles.scss";

const FileSelector = ({ fileType }) => {
  switch (fileType) {
    case ".js":
      return (
        <svg viewBox="0 0 60 55" width="15px" height="15px">
          <JSFile />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 60 55" width="15px" height="15px">
          <TexFile />
        </svg>
      );
  }
};

const Folder = ({ folderName, folderFiles, switchCurrentFile }) => {
  const [fileToggle, setFileToggle] = useState(false);

  return (
    <div className="folder">
      <div className="folder-bar" onClick={() => setFileToggle(!fileToggle)}>
        {fileToggle ? <OpenFolderIcon /> : <ClosedFolderIcon />}
        <div className="folder-title">{folderName}</div>
      </div>
      {fileToggle
        ? Object.keys(folderFiles).map(file => (
            <div
              key={file}
              className="file"
              onClick={() => switchCurrentFile(folderName, file)}
            >
              <div className="file-title">
                <FileSelector fileType={file.slice(file.lastIndexOf("."))} />
                {file}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

const mapDispathcToProps = dispatch => ({
  switchCurrentFile: (folder, file) => dispatch(switchCurrentFile(folder, file))
});

export default connect(
  null,
  mapDispathcToProps
)(Folder);
