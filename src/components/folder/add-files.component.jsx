import React from "react";
import { connect } from "react-redux";
import { addFile } from "../../redux/user/user.actions";

const AddFiles = ({ addFile, folderRef }) => (
  <div className="add-files">
    <div className="add-files-button" onClick={() => addFile(folderRef)}>
      &#10010;
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addFile: folder => dispatch(addFile(folder))
});

export default connect(
  null,
  mapDispatchToProps
)(AddFiles);
