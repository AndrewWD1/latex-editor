import React from "react";
import { connect } from "react-redux";
import { selectDynamicWidth } from "../../redux/screen/screen.selectors";
import { saveTextToFile } from "../../redux/user/user.actions";

import "./save-compile-button.styles.scss";

const SaveCompileButton = ({
  dynamicWidth,
  editorViewerToggle,
  divider,
  saveTextToFile
}) => {
  let actualWidth =
    editorViewerToggle === "both" ? dynamicWidth / 2 - divider : 0;

  if (editorViewerToggle === "editor" || dynamicWidth - actualWidth < 170)
    return null;

  return (
    <div
      className="save-compile-button"
      style={{ right: actualWidth }}
      onClick={saveTextToFile}
    >
      Save and Compile
    </div>
  );
};

const mapStateToProps = state => ({
  dynamicWidth: selectDynamicWidth(state),
  editorViewerToggle: state.screen.editorViewerToggle,
  divider: state.screen.divider
});

const mapDispatchToProps = dispatch => ({
  saveTextToFile: () => dispatch(saveTextToFile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveCompileButton);
