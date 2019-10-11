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
  toggleEditorViewer
}) => {
  return (
    <div className="header">
      <div className="title">Latex Editor</div>
      <div className="dropper-container">
        <div
          className="dropper"
          onClick={() => changeDropdowns(dropdownMenuDropped.FILES_OPEN)}
        >
          Files
        </div>
        {dropdownMenuClicked === dropdownMenuDropped.FILES_OPEN ? (
          <FilesMenu />
        ) : null}
        <div
          className="dropper"
          onClick={() =>
            changeDropdowns(dropdownMenuDropped.EDITOR_OPTIONS_OPEN)
          }
        >
          Editor Options
        </div>
        {dropdownMenuClicked === dropdownMenuDropped.EDITOR_OPTIONS_OPEN ? (
          <EditorOptionsMenu />
        ) : null}
        <div className="dropper" onClick={() => toggleEditorViewer("editor")}>
          Toggle Editor
        </div>
        <div className="dropper" onClick={() => toggleEditorViewer("viewer")}>
          Toggle Viewer
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  dropdownMenuClicked: state.dropdownMenu.dropdownMenuClicked
});

const mapDispatchToProps = dispatch => ({
  changeDropdowns: dropdown => dispatch(changeDropdowns(dropdown)),
  toggleEditorViewer: component => dispatch(toggleEditorViewer(component))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
