import React from "react";
import Editor from "../editor/editor.component";
import Viewer from "../viewer/viewer.component";
import { connect } from "react-redux";
import { changeDropdowns } from "../../redux/dropdown-menu/dropdown-menu.actions";
import { dropdownMenuDropped } from "../../redux/dropdown-menu/dropdown-menu.types";

import "./editor-viewer-container.styles.scss";

const EditorViewerContainer = ({
  width,
  height,
  dropdownMenuClicked,
  closeDropdownsOnClick
}) => {
  return (
    <div
      className="editor-viewer-container"
      style={{ height: `${height - 73}` }}
      onClick={() => {
        if (dropdownMenuClicked !== dropdownMenuDropped.DROPDOWNS_CLOSED) {
          closeDropdownsOnClick();
        }
      }}
    >
      {true ? <Editor width={width} height={height - 73} /> : null}
      {true ? <Viewer width={width} height={height - 76} /> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.screen.windowWidth,
  height: state.screen.windowHeight,
  dropdownMenuClicked: state.dropdownMenu.dropdownMenuClicked
});
const mapDipsatchToProps = dispatch => ({
  closeDropdownsOnClick: () =>
    dispatch(changeDropdowns(dropdownMenuDropped.DROPDOWNS_CLOSED))
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(EditorViewerContainer);
