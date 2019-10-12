import React from "react";
import Editor from "../editor/editor.component";
import Viewer from "../viewer/viewer.component";
import FolderContainer from "../folder-container/folder-container.component";
import { connect } from "react-redux";
import { changeDropdowns } from "../../redux/dropdown-menu/dropdown-menu.actions";
import { dropdownMenuDropped } from "../../redux/dropdown-menu/dropdown-menu.types";
import "./editor-viewer-container.styles.scss";

const EditorViewerContainer = ({
  width,
  height,
  dropdownMenuClicked,
  closeDropdownsOnClick,
  editorViewerToggle,
  foldersToggle,
  folder,
  file
}) => {
  let dynamicWidth = foldersToggle ? width - 200 : width;

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
      {foldersToggle ? (
        <FolderContainer width={200} height={height - 74} />
      ) : null}
      {editorViewerToggle === "both" ? (
        <Editor width={dynamicWidth / 2} height={height - 73} />
      ) : editorViewerToggle === "viewer" ? (
        <Editor width={dynamicWidth} height={height - 73} />
      ) : null}
      {editorViewerToggle === "both" ? (
        <Viewer
          folder={folder}
          file={file}
          width={dynamicWidth / 2}
          height={height - 76}
        />
      ) : editorViewerToggle === "editor" ? (
        <Viewer
          folder={folder}
          file={file}
          width={dynamicWidth}
          height={height - 76}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.screen.windowWidth,
  height: state.screen.windowHeight,
  editorViewerToggle: state.screen.editorViewerToggle,
  dropdownMenuClicked: state.dropdownMenu.dropdownMenuClicked,
  foldersToggle: state.screen.foldersToggle,
  folder: state.folders.currentFolder,
  file: state.folders.currentFile
});
const mapDipsatchToProps = dispatch => ({
  closeDropdownsOnClick: () =>
    dispatch(changeDropdowns(dropdownMenuDropped.DROPDOWNS_CLOSED))
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(EditorViewerContainer);
