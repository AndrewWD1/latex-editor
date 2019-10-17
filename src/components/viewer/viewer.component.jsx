import React from "react";
import { connect } from "react-redux";
import { selectPDFLink } from "../../redux/files/files.selectors";
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
  pdfLink: selectPDFLink(ownProps.folder, ownProps.file)(state),
  dynamicWidth: selectDynamicWidth(state),
  height: state.screen.windowHeight,
  editorViewerToggle: state.screen.editorViewerToggle
});

export default connect(mapStateToProps)(Viewer);
