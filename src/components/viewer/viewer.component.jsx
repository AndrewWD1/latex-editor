import React from "react";
import { connect } from "react-redux";
import { selectDynamicWidth } from "../../redux/screen/screen.selectors";

const Viewer = ({
  divider,
  pdfLink,
  dynamicWidth,
  height,
  editorViewerToggle
}) => {
  const actualWidth =
    editorViewerToggle === "both" ? dynamicWidth / 2 - divider : dynamicWidth;

  if (editorViewerToggle === "viewer") return null;
  return (
    <iframe
      id="PDF"
      title="PDF"
      width={actualWidth}
      height={height - 76}
      src={pdfLink}
    />
  );
};

const mapStateToProps = (state, ownProps) => ({
  pdfLink: state.user.currentFile.pdfLink,
  dynamicWidth: selectDynamicWidth(state),
  height: state.screen.windowHeight,
  editorViewerToggle: state.screen.editorViewerToggle,
  divider: state.screen.divider
});

export default connect(mapStateToProps)(Viewer);
