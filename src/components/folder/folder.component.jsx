import React, { useState } from "react";
import { connect } from "react-redux";
import {
  changeFolderName,
  setFolderChangingName,
  setFolderChangingNameInput
} from "../../redux/user/user.actions";
import { selectFileByRef } from "../../redux/user/user.selectors";

import AddFiles from "./add-files.component";
import { ReactComponent as ClosedFolderIcon } from "../icons/closed-folder.svg";
import { ReactComponent as OpenFolderIcon } from "../icons/open-folder.svg";

import File from "./file.component";

import "./folder.styles.scss";

const Folder = ({
  folder,
  selectFileByRef,
  folderChangingName,
  setFolderChangingName,
  folderChangingNameInput,
  setFolderChangingNameInput,
  changeFolderName
}) => {
  const [fileToggle, setFileToggle] = useState(false);
  const { title, ref, files } = folder;
  const handleDoubleClick = () => {
    setFolderChangingNameInput(title);
    setFolderChangingName(ref);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      changeFolderName(ref, folderChangingNameInput);
      setFolderChangingName(false);
    }
  };
  const handleChangeInput = e => setFolderChangingNameInput(e.target.value);

  return (
    <div className="folder">
      <div className="folder-bar">
        <div
          className="title-and-icon"
          onClick={() => setFileToggle(!fileToggle)}
        >
          {fileToggle ? <OpenFolderIcon /> : <ClosedFolderIcon />}
          <div
            className="folder-title"
            onDoubleClick={handleDoubleClick}
            onKeyPress={handleKeyPress}
          >
            {folderChangingName === ref ? (
              <input
                className="folder-file-input"
                value={folderChangingNameInput}
                onChange={handleChangeInput}
              />
            ) : (
              title
            )}
          </div>
        </div>
        <AddFiles folderRef={ref} />
      </div>
      {fileToggle &&
        Object.values(files).map(ref => (
          <File key={ref} file={selectFileByRef(ref)} title={title} />
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  selectFileByRef: ref => selectFileByRef(ref)(state),
  folderChangingName: state.user.folderChangingName,
  folderChangingNameInput: state.user.folderChangingNameInput
});

const mapDispatchToProps = dispatch => ({
  changeFolderName: (ref, newName) => dispatch(changeFolderName(ref, newName)),
  setFolderChangingName: ref => dispatch(setFolderChangingName(ref)),
  setFolderChangingNameInput: input =>
    dispatch(setFolderChangingNameInput(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Folder);
