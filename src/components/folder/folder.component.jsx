import React, { useState } from "react";
import { connect } from "react-redux";
import {
  changeFolderName,
  setFolderChangingName,
  setFolderChangingNameInput
} from "../../redux/user/user.actions";
import { selectFileById } from "../../redux/user/user.selectors";

import AddFiles from "./add-folders-files.component";
import { ReactComponent as ClosedFolderIcon } from "../icons/closed-folder.svg";
import { ReactComponent as OpenFolderIcon } from "../icons/open-folder.svg";

import File from "./file.component";

import "./folder.styles.scss";

const Folder = ({
  folderName,
  folderID,
  folderFiles,
  selectFileById,
  folderChangingName,
  setFolderChangingName,
  folderChangingNameInput,
  setFolderChangingNameInput,
  changeFolderName
}) => {
  const [fileToggle, setFileToggle] = useState(false);

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
            onDoubleClick={() => {
              setFolderChangingNameInput(folderName);
              setFolderChangingName(folderID);
            }}
            onKeyPress={e => {
              if (e.key === "Enter") {
                changeFolderName(folderID, folderChangingNameInput);
                setFolderChangingName(false);
              }
            }}
          >
            {folderChangingName === folderID ? (
              <input
                className="folder-file-input"
                value={folderChangingNameInput}
                onChange={e => setFolderChangingNameInput(e.target.value)}
              />
            ) : (
              folderName
            )}
          </div>
        </div>
        <AddFiles folderID={folderID} />
      </div>
      {fileToggle
        ? Object.values(folderFiles).map(id => (
            <File key={id} file={selectFileById(id)} folderName={folderName} />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = state => ({
  selectFileById: id => selectFileById(id)(state),
  folderChangingName: state.user.folderChangingName,
  folderChangingNameInput: state.user.folderChangingNameInput
});

const mapDispatchToProps = dispatch => ({
  changeFolderName: (folderID, newName) =>
    dispatch(changeFolderName(folderID, newName)),
  setFolderChangingName: folderID => dispatch(setFolderChangingName(folderID)),
  setFolderChangingNameInput: input =>
    dispatch(setFolderChangingNameInput(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Folder);
