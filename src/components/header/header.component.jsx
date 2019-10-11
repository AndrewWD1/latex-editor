import React from "react";
import { connect } from "react-redux";
import DropdownMenu from "../dropdown-menu/dropdown-menu.component";
import { changeDropdowns } from "../../redux/dropdown-menu/dropdown-menu.actions";
import { dropdownMenuDropped } from "../../redux/dropdown-menu/dropdown-menu.types";

import "./header.styles.scss";

const Header = ({ dropdownMenuClicked, changeDropdowns }) => {
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
          <DropdownMenu
            dropdownItems={["hello", "there"]}
            top="55"
            left="250"
          />
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
          <DropdownMenu
            dropdownItems={["hello", "there"]}
            top="55"
            left="350"
          />
        ) : null}
        <div className="dropper">Toggle Editor</div>
        <div className="dropper">Toggle Viewer</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  dropdownMenuClicked: state.dropdownMenu.dropdownMenuClicked
});

const mapDispatchToProps = dispatch => ({
  changeDropdowns: dropdown => dispatch(changeDropdowns(dropdown))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
