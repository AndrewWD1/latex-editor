import React, { useState } from "react";
import { connect } from "react-redux";
import AddFoldersFiles from "./add-folders-files.component";
import { ReactComponent as ClosedFolderIcon } from "../icons/closed-folder.svg";
import { ReactComponent as OpenFolderIcon } from "../icons/open-folder.svg";

import File from "./file.component";

import "./folder.styles.scss";

const Folder = ({ folderName, folderFiles }) => {
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
        <AddFoldersFiles folderName={folderName} />
      </div>
      {fileToggle
        ? Object.keys(folderFiles).map(file => (
            <File
              key={folderName + file}
              file={file}
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

export default connect(null)(Folder);
