import React, { useState } from "react";
import { connect } from "react-redux";
import { selectFileById } from "../../redux/user/user.selectors";

import AddFiles from "./add-folders-files.component";
import { ReactComponent as ClosedFolderIcon } from "../icons/closed-folder.svg";
import { ReactComponent as OpenFolderIcon } from "../icons/open-folder.svg";

import File from "./file.component";

import "./folder.styles.scss";

const Folder = ({ folderName, folderID, folderFiles, selectFileById }) => {
  const [fileToggle, setFileToggle] = useState(false);
  const [fileChangingName, setFileChangingName] = useState(false);
  const [fileChangingNameInput, setFileChangingNameInput] = useState("");

  return (
    <div className="folder">
      <div className="folder-bar">
        <div
          className="title-and-icon"
          onClick={() => setFileToggle(!fileToggle)}
        >
          {fileToggle ? <OpenFolderIcon /> : <ClosedFolderIcon />}
          <div className="folder-title">{folderName}</div>
        </div>
        <AddFiles folderID={folderID} />
      </div>
      {fileToggle
        ? Object.values(folderFiles).map(id => (
            <File
              key={id}
              file={selectFileById(id)}
              folderName={folderName}
              fileChangingName={fileChangingName}
              setFileChangingName={setFileChangingName}
              fileChangingNameInput={fileChangingNameInput}
              setFileChangingNameInput={setFileChangingNameInput}
            />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = state => ({
  selectFileById: id => selectFileById(id)(state)
});

export default connect(mapStateToProps)(Folder);
