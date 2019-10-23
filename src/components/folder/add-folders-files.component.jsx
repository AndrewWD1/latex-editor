import React from "react";
import { connect } from "react-redux";
import { ReactComponent as AddFolder } from "../icons/add-folder.svg";
import { addFile } from "../../redux/files/files.actions";

const AddFolderFiles = ({ addFile, folderName }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "baseline",
      width: "40px"
    }}
  >
    <div
      style={{ color: "black", cursor: "pointer" }}
      onClick={() => addFile(folderName)}
    >
      &#10010;
    </div>
    <AddFolder style={{ cursor: "pointer" }} />
  </div>
);

const mapDispatchToProps = dispatch => ({
  addFile: folder => dispatch(addFile(folder))
});

export default connect(
  null,
  mapDispatchToProps
)(AddFolderFiles);
