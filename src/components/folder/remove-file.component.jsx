import React from "react";
import { connect } from "react-redux";
import { removeFile } from "../../redux/user/user.actions";

const RemoveFile = ({ fileRef, removeFile }) => (
  <div onClick={() => removeFile(fileRef)} style={{ color: "black" }}>
    &#10005;
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeFile: ref => dispatch(removeFile(ref))
});

export default connect(
  null,
  mapDispatchToProps
)(RemoveFile);
