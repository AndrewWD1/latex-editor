import React from "react";
import { connect } from "react-redux";
import EditorOptionsMenu from "../editor-options-menu/editor-options-menu.component";
import FilesMenu from "../files-menu/files-menu.component";
import { changeDropdowns } from "../../redux/dropdown-menu/dropdown-menu.actions";
import { dropdownMenuDropped } from "../../redux/dropdown-menu/dropdown-menu.types";
import { toggleEditorViewer } from "../../redux/screen/screen.actions";

import "./header.styles.scss";

const Header = ({
  dropdownMenuClicked,
  changeDropdowns,
  toggleEditorViewer,
  width
}) => {
  return (
    <div className={`header ${width < 860 && "header--small"}`}>
      <div className={`title ${width < 860 && "title--small"}`}>
        Latex Editor
      </div>
      <div
        className={`dropper-container ${width < 860 &&
          "dropper-container--small"}`}
      >
        <div
          className={`dropper ${width < 860 && "dropper--small"}`}
          onClick={() => changeDropdowns(dropdownMenuDropped.FILES_OPEN)}
          onMouseOver={() => {
            if (
              dropdownMenuClicked === dropdownMenuDropped.EDITOR_OPTIONS_OPEN
            ) {
              changeDropdowns(dropdownMenuDropped.FILES_OPEN);
            }
          }}
        >
          Files
        </div>
        {dropdownMenuClicked === dropdownMenuDropped.FILES_OPEN ? (
          <FilesMenu />
        ) : null}
        <div
          className={`dropper ${width < 860 && "dropper--small"}`}
          onClick={() =>
            changeDropdowns(dropdownMenuDropped.EDITOR_OPTIONS_OPEN)
          }
          onMouseOver={() => {
            if (dropdownMenuClicked === dropdownMenuDropped.FILES_OPEN) {
              changeDropdowns(dropdownMenuDropped.EDITOR_OPTIONS_OPEN);
            }
          }}
        >
          Editor Options
        </div>
        {dropdownMenuClicked === dropdownMenuDropped.EDITOR_OPTIONS_OPEN ? (
          <EditorOptionsMenu />
        ) : null}
        {width > 860 && (
          <div
            className="dropper"
            onClick={() => toggleEditorViewer("editor")}
            onMouseOver={() => {
              if (
                dropdownMenuClicked ===
                  dropdownMenuDropped.EDITOR_OPTIONS_OPEN ||
                dropdownMenuClicked === dropdownMenuDropped.FILES_OPEN
              ) {
                changeDropdowns(dropdownMenuDropped.DROPDOWNS_CLOSED);
              }
            }}
          >
            Toggle Editor
          </div>
        )}
        {width > 860 && (
          <div
            className="dropper"
            onClick={() => toggleEditorViewer("viewer")}
            onMouseOver={() => {
              if (
                dropdownMenuClicked ===
                  dropdownMenuDropped.EDITOR_OPTIONS_OPEN ||
                dropdownMenuClicked === dropdownMenuDropped.FILES_OPEN
              ) {
                changeDropdowns(dropdownMenuDropped.DROPDOWNS_CLOSED);
              }
            }}
          >
            Toggle Viewer
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  dropdownMenuClicked: state.dropdownMenu.dropdownMenuClicked,
  width: state.screen.windowWidth
});

const mapDispatchToProps = dispatch => ({
  changeDropdowns: dropdown => dispatch(changeDropdowns(dropdown)),
  toggleEditorViewer: component => dispatch(toggleEditorViewer(component))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
