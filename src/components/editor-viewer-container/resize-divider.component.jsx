import React from "react";
import { connect } from "react-redux";
import { switchResizerClicked } from "../../redux/screen/screen.actions";
import { selectDynamicWidth } from "../../redux/screen/screen.selectors";

const ResizeDivider = ({
  splitScreen,
  dynamicWidth,
  divider,
  height,
  foldersToggle,
  switchResizerClicked
}) => {
  if (splitScreen) {
    return (
      <div
        className="resize-divider"
        style={{
          left: foldersToggle
            ? dynamicWidth / 2 + 178 + divider
            : dynamicWidth / 2 - 2 + divider,
          height: height - 73
        }}
        onMouseDown={() => {
          switchResizerClicked(true);
        }}
      ></div>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  splitScreen: state.screen.editorViewerToggle === "both",
  dynamicWidth: selectDynamicWidth(state),
  height: state.screen.windowHeight,
  editorViewerToggle: state.screen.editorViewerToggle,
  foldersToggle: state.screen.foldersToggle,
  divider: state.screen.divider
});

const mapDispatchToProps = dispatch => ({
  switchResizerClicked: bool => dispatch(switchResizerClicked(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResizeDivider);
