import React from "react";
import { connect } from "react-redux";
import {
  switchCurrentFile,
  changeFileName,
  setFileChangingName,
  setFileChangingNameInput
} from "../../redux/user/user.actions";

import { ReactComponent as TexFile } from "../icons/tex-file.svg";
import { ReactComponent as JSFile } from "../icons/js-file.svg";

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

const File = ({
  file,
  switchCurrentFile,
  fileChangingName,
  setFileChangingName,
  fileChangingNameInput,
  setFileChangingNameInput,
  changeFileName
}) => {
  const { title, id } = file;
  const handleDoubleClick = () => {
    setFileChangingNameInput(title);
    setFileChangingName(id);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      changeFileName(id, fileChangingNameInput);
      setFileChangingName(false);
    }
  };

  return (
    <div className="file">
      <div
        className="file-title"
        onClick={() => switchCurrentFile(file)}
        onDoubleClick={handleDoubleClick}
        onKeyPress={handleKeyPress}
      >
        <FileSelector fileType={title.slice(title.lastIndexOf("."))} />
        {fileChangingName === id ? (
          <input
            className="folder-file-input"
            value={fileChangingNameInput}
            onChange={e => setFileChangingNameInput(e.target.value)}
          />
        ) : (
          title
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  fileChangingName: state.user.fileChangingName,
  fileChangingNameInput: state.user.fileChangingNameInput
});

const mapDispatchToProps = dispatch => ({
  switchCurrentFile: file => dispatch(switchCurrentFile(file)),
  changeFileName: (id, newName) => dispatch(changeFileName(id, newName)),
  setFileChangingName: file => dispatch(setFileChangingName(file)),
  setFileChangingNameInput: input => dispatch(setFileChangingNameInput(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File);
