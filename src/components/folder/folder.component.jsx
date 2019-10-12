import React, { useState } from "react";
import { connect } from "react-redux";
import { switchCurrentFile } from "../../redux/files/files.actions";

import "./folder.styles.scss";

const Folder = ({ folderName, folderFiles, switchCurrentFile }) => {
  const [fileToggle, setFileToggle] = useState(false);

  return (
    <div
      className="folder"
      style={{ borderBottom: fileToggle ? "none" : "1px solid #080808" }}
    >
      <div className="folder-title" onClick={() => setFileToggle(!fileToggle)}>
        {folderName}
      </div>
      {fileToggle
        ? Object.keys(folderFiles).map(file => (
            <div
              key={file}
              className="file"
              onClick={() => switchCurrentFile(folderName, file)}
            >
              {file}
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
