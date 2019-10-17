import React, { useState } from "react";
import { connect } from "react-redux";

import { changeDropdowns } from "../../redux/dropdown-menu/dropdown-menu.actions";
import { dropdownMenuDropped } from "../../redux/dropdown-menu/dropdown-menu.types";
import { switchResizerClicked } from "../../redux/screen/screen.actions";
import { selectDynamicWidth } from "../../redux/screen/screen.selectors";
import { toggleEditorViewer } from "../../redux/screen/screen.actions";

import Editor from "../editor/editor.component";
import Viewer from "../viewer/viewer.component";
import ResizeCover from "./resize-cover.component";
import FolderContainer from "../folder-container/folder-container.component";
import ResizeDivider from "./resize-divider.component";

import "./editor-viewer-container.styles.scss";

const EditorViewerContainer = ({
  dynamicWidth,
  height,
  dropdownMenuClicked,
  closeDropdownsOnClick,
  foldersToggle,
  folder,
  file,
  switchResizerClicked,
  toggleEditorViewer
}) => {
  const [divider, setDivider] = useState(0);
  const dropdownCloser = () => {
    if (dropdownMenuClicked !== dropdownMenuDropped.DROPDOWNS_CLOSED) {
      closeDropdownsOnClick();
    }
  };

  const moveDivider = e => {
    if (foldersToggle) {
      if (e.clientX < 230) {
        toggleEditorViewer("editor");
        switchResizerClicked(false);
        setDivider(0);
        return;
      }
      if (e.clientX > dynamicWidth + 130) {
        toggleEditorViewer("viewer");
        switchResizerClicked(false);
        setDivider(0);
        return;
      }
      setDivider(e.clientX - dynamicWidth / 2 - 180);
    } else {
      if (e.clientX < 50) {
        toggleEditorViewer("editor");
        switchResizerClicked(false);
        setDivider(0);
        return;
      }
      if (e.clientX > dynamicWidth - 50) {
        toggleEditorViewer("viewer");
        switchResizerClicked(false);
        setDivider(0);
        return;
      }
      setDivider(e.clientX - dynamicWidth / 2);
    }
  };

  return (
    <div
      className="editor-viewer-container"
      style={{ height: height - 73 }}
      onMouseDown={dropdownCloser}
      onMouseUp={() => switchResizerClicked(false)}
    >
      {foldersToggle && <FolderContainer width={140} height={height - 74} />}
      <Editor divider={divider} />
      <ResizeDivider divider={divider} />
      <ResizeCover moveDivider={e => moveDivider(e)} />
      <Viewer divider={divider} folder={folder} file={file} />)
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.screen.windowWidth,
  dynamicWidth: selectDynamicWidth(state),
  height: state.screen.windowHeight,
  editorViewerToggle: state.screen.editorViewerToggle,
  dropdownMenuClicked: state.dropdownMenu.dropdownMenuClicked,
  foldersToggle: state.screen.foldersToggle,
  folder: state.folders.currentFolder,
  file: state.folders.currentFile
});

const mapDipsatchToProps = dispatch => ({
  closeDropdownsOnClick: () =>
    dispatch(changeDropdowns(dropdownMenuDropped.DROPDOWNS_CLOSED)),
  switchResizerClicked: bool => dispatch(switchResizerClicked(bool)),
  toggleEditorViewer: component => dispatch(toggleEditorViewer(component))
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(EditorViewerContainer);
