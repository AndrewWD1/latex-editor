import React from "react";
import { connect } from "react-redux";
import {
  switchCurrentFile,
  changeFileName
} from "../../redux/files/files.actions";

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
  folderName,
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
        onClick={() => switchCurrentFile(folderName, file)}
        onDoubleClick={() => {
          setFileChangingNameInput(file);
          setFileChangingName(file);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            changeFileName(file, fileChangingNameInput);
            setFileChangingName(false);
          }
        }}
      >
        <FileSelector fileType={file.slice(file.lastIndexOf("."))} />
        {fileChangingName === file ? (
          <input
            style={{
              width: "100px",
              borderRadius: "2px",
              border: "none",
              backgroundColor: "#c4b7b7"
            }}
            value={fileChangingNameInput}
            onChange={e => setFileChangingNameInput(e.target.value)}
          />
        ) : (
          file
        )}
      </div>
    </div>
  );
};
const mapDispathcToProps = dispatch => ({
  switchCurrentFile: (folder, file) =>
    dispatch(switchCurrentFile(folder, file)),
  changeFileName: (currentName, newName) =>
    dispatch(changeFileName(currentName, newName))
});

export default connect(
  null,
  mapDispathcToProps
)(File);
