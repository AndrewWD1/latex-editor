import React from "react";
import { connect } from "react-redux";
import { addFile, removeFolder } from "../../redux/user/user.actions";

const AddFiles = ({ addFile, folderRef, removeFolder }) => (
  <div className="add-files">
    <div className="add-files-button" onClick={() => addFile(folderRef)}>
      &#10010;
    </div>
    <div className="add-files-button" onClick={() => removeFolder(folderRef)}>
      &#10006;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addFile: folder => dispatch(addFile(folder)),
  removeFolder: ref => dispatch(removeFolder(ref))
});

export default connect(
  null,
  mapDispatchToProps
)(AddFiles);
