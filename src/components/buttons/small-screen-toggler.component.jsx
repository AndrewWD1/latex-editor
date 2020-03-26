import React from "react";
import { connect } from "react-redux";
import { selectDynamicWidth } from "../../redux/screen/screen.selectors";
import { saveTextToFile } from "../../redux/user/user.actions";
import { toggleEditorViewer } from "../../redux/screen/screen.actions";

import "./save-compile-button.styles.scss";

const SaveCompileButton = ({
  dynamicWidth,
  editorViewerToggle,
  divider,
  toggleEditorViewer
}) => {
  let actualWidth =
    editorViewerToggle === "both" ? dynamicWidth / 2 - divider : 0;

  if (dynamicWidth - actualWidth < 170) return null;

  return (
    <div
      className={
        editorViewerToggle !== "editor"
          ? "small-screen-toggler"
          : "save-compile-button"
      }
      style={{ right: actualWidth }}
      onClick={() => {
        if (editorViewerToggle === "editor") {
          toggleEditorViewer("viewer");
        } else {
          toggleEditorViewer("editor");
        }
      }}
    >
      Toggle Viewer
    </div>
  );
};

const mapStateToProps = state => ({
  dynamicWidth: selectDynamicWidth(state),
  editorViewerToggle: state.screen.editorViewerToggle,
  divider: state.screen.divider
});

const mapDispatchToProps = dispatch => ({
  saveTextToFile: () => dispatch(saveTextToFile()),
  toggleEditorViewer: component => dispatch(toggleEditorViewer(component))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveCompileButton);
