import React from "react";
import { connect } from "react-redux";
import {
  switchCurrentFile,
  changeFileName,
  setFileChangingName,
  setFileChangingNameInput
} from "../../redux/user/user.actions";
import { selectCurrentFileRef } from "../../redux/user/user.selectors";

import RemoveFile from "./remove-file.component";

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
  currentFileRef,
  changeFileName
}) => {
  const { title, ref } = file;
  const handleDoubleClick = () => {
    setFileChangingNameInput(title);
    setFileChangingName(ref);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      changeFileName(ref, fileChangingNameInput);
      setFileChangingName(false);
    }
  };

  return (
    <div className="file">
      <div
        className={`file-title${
          file.ref === currentFileRef ? "-selected" : ""
        }`}
        onKeyPress={handleKeyPress}
      >
        <FileSelector fileType={title.slice(title.lastIndexOf("."))} />
        {fileChangingName === ref ? (
          <input
            className="folder-file-input"
            value={fileChangingNameInput}
            onChange={e => setFileChangingNameInput(e.target.value)}
          />
        ) : (
          <div
            onClick={() => switchCurrentFile(file)}
            onDoubleClick={handleDoubleClick}
          >
            {title}
          </div>
        )}
      </div>
      <RemoveFile fileRef={ref} />
    </div>
  );
};

const mapStateToProps = state => ({
  fileChangingName: state.user.fileChangingName,
  fileChangingNameInput: state.user.fileChangingNameInput,
  currentFileRef: selectCurrentFileRef(state)
});

const mapDispatchToProps = dispatch => ({
  switchCurrentFile: file => dispatch(switchCurrentFile(file)),
  changeFileName: (ref, newName) => dispatch(changeFileName(ref, newName)),
  setFileChangingName: file => dispatch(setFileChangingName(file)),
  setFileChangingNameInput: input => dispatch(setFileChangingNameInput(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(File);
