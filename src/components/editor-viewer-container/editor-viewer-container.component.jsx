import React, { useState } from "react";
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
  const [resizerClicked, setResizerClicked] = useState(false);
  const dynamicWidth = foldersToggle ? width - 200 : width;
  const [divider, setDivider] = useState(0);

  return (
    <div
      className="editor-viewer-container"
      style={{ height: `${height - 73}` }}
      onClick={() => {
        if (dropdownMenuClicked !== dropdownMenuDropped.DROPDOWNS_CLOSED) {
          closeDropdownsOnClick();
        }
      }}
      onMouseMove={e => {
        if (resizerClicked) {
          setDivider(
            foldersToggle
              ? e.clientX - dynamicWidth / 2 - 180
              : e.clientX - dynamicWidth / 2
          );
          console.log(divider);
        }
      }}
      onMouseUp={() => {
        setResizerClicked(false);
      }}
    >
      {foldersToggle ? (
        <FolderContainer width={140} height={height - 74} />
      ) : null}
      {editorViewerToggle === "both" ? (
        <Editor width={dynamicWidth / 2 + divider} height={height - 73} />
      ) : editorViewerToggle === "viewer" ? (
        <Editor width={dynamicWidth + divider} height={height - 73} />
      ) : null}

      {editorViewerToggle === "both" ? (
        <div
          style={{
            left: `${
              foldersToggle
                ? dynamicWidth / 2 + 178 + divider
                : dynamicWidth / 2 - 2 + divider
            }px`,
            height: `${height - 73}px`
          }}
          className="resize-divider"
          onMouseDown={() => {
            setResizerClicked(true);
          }}
        ></div>
      ) : null}

      {/* The below element is added t ocover the viewer iframe 
      while resizer is clicked. This must be done because the 
      iframe is its on browser windwo and consumes all mouse 
      events itself. But if we just left it covered all the 
      time, none of the iframes functionality would work
       */}
      {resizerClicked ? (
        <div
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            height: height - 73,
            width: dynamicWidth / 2 + divider - 3,
            left: `${
              foldersToggle
                ? dynamicWidth / 2 + 181 + divider
                : dynamicWidth / 2 + 1 + divider
            }px`
          }}
        ></div>
      ) : null}

      {editorViewerToggle === "both" ? (
        <Viewer
          folder={folder}
          file={file}
          width={dynamicWidth / 2 - divider}
          height={height - 76}
        />
      ) : editorViewerToggle === "editor" ? (
        <Viewer
          folder={folder}
          file={file}
          width={dynamicWidth - divider}
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
