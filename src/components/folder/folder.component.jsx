import React, { useState } from "react";
import { connect } from "react-redux";
import {
  changeFolderName,
  setFolderChangingName,
  setFolderChangingNameInput
} from "../../redux/user/user.actions";
import { selectFileById } from "../../redux/user/user.selectors";

import AddFiles from "./add-files.component";
import { ReactComponent as ClosedFolderIcon } from "../icons/closed-folder.svg";
import { ReactComponent as OpenFolderIcon } from "../icons/open-folder.svg";

import File from "./file.component";

import "./folder.styles.scss";

const Folder = ({
  folder,
  selectFileById,
  folderChangingName,
  setFolderChangingName,
  folderChangingNameInput,
  setFolderChangingNameInput,
  changeFolderName
}) => {
  const [fileToggle, setFileToggle] = useState(false);
  const { title, id, files } = folder;
  const handleDoubleClick = () => {
    setFolderChangingNameInput(title);
    setFolderChangingName(id);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      changeFolderName(id, folderChangingNameInput);
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
            {folderChangingName === id ? (
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
        <AddFiles folderID={id} />
      </div>
      {fileToggle &&
        Object.values(files).map(id => (
          <File key={id} file={selectFileById(id)} title={title} />
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  selectFileById: id => selectFileById(id)(state),
  folderChangingName: state.user.folderChangingName,
  folderChangingNameInput: state.user.folderChangingNameInput
});

const mapDispatchToProps = dispatch => ({
  changeFolderName: (id, newName) => dispatch(changeFolderName(id, newName)),
  setFolderChangingName: id => dispatch(setFolderChangingName(id)),
  setFolderChangingNameInput: input =>
    dispatch(setFolderChangingNameInput(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Folder);
