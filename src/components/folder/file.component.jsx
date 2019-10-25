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
  return (
    <div key={file} className="file">
      <div
        className="file-title"
        onClick={() => switchCurrentFile(file)}
        onDoubleClick={() => {
          setFileChangingNameInput(file.title);
          setFileChangingName(file);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            changeFileName(file.id, fileChangingNameInput);
            setFileChangingName(false);
          }
        }}
      >
        <FileSelector
          fileType={file.title.slice(file.title.lastIndexOf("."))}
        />
        {fileChangingName === file ? (
          <input
            className="folder-file-input"
            value={fileChangingNameInput}
            onChange={e => setFileChangingNameInput(e.target.value)}
          />
        ) : (
          file.title
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
