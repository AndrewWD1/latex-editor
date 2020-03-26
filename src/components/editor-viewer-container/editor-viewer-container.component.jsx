import React from "react";
import { connect } from "react-redux";

import { changeDropdowns } from "../../redux/dropdown-menu/dropdown-menu.actions";
import { dropdownMenuDropped } from "../../redux/dropdown-menu/dropdown-menu.types";
import { switchResizerClicked } from "../../redux/screen/screen.actions";

import Editor from "../editor/editor.component";
import Viewer from "../viewer/viewer.component";
import ResizeCover from "./resize-cover.component";
import FolderContainer from "../folder-container/folder-container.component";
import ResizeDivider from "./resize-divider.component";
import SaveCompileButton from "../buttons/save-compile-button.component";
import SmallScreenToggler from "../buttons/small-screen-toggler.component";

import "./editor-viewer-container.styles.scss";

const EditorViewerContainer = ({
  height,
  width,
  closeDropdownsOnClick,
  folder,
  file,
  switchResizerClicked
}) => {
  return (
    <div
      className="editor-viewer-container"
      style={{ height: height - 73 }}
      onMouseDown={() => {
        closeDropdownsOnClick();
      }}
      onMouseUp={() => switchResizerClicked(false)}
    >
      <FolderContainer />
      <Editor />
      {width < 860 && <SmallScreenToggler />}
      <SaveCompileButton />
      <ResizeDivider />
      <ResizeCover />
      <Viewer folder={folder} file={file} />
    </div>
  );
};

const mapStateToProps = state => ({
  height: state.screen.windowHeight,
  width: state.screen.windowWidth,
  editorViewerToggle: state.screen.editorViewerToggle,
  dropdownMenuClicked: state.dropdownMenu.dropdownMenuClicked,
  folder: state.user.currentFolder,
  file: state.user.currentFile
});

const mapDipsatchToProps = dispatch => ({
  closeDropdownsOnClick: () =>
    dispatch(changeDropdowns(dropdownMenuDropped.DROPDOWNS_CLOSED)),
  switchResizerClicked: bool => dispatch(switchResizerClicked(bool))
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(EditorViewerContainer);
