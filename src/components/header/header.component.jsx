import React, { useState } from "react";
import DropdownMenu from "../dropdown-menu/dropdown-menu.component";

import "./header.styles.scss";

const Header = () => {
  const [dropdownClicked, setDropdownClicked] = useState(null);

  const handleDropdownClick = dropdown => {
    if (dropdown === dropdownClicked) {
      setDropdownClicked(null);
    } else {
      setDropdownClicked(dropdown);
    }
  };

  return (
    <div className="header">
      <div className="title">Latex Editor</div>
      <div className="dropper-container">
        <div className="dropper" onClick={() => handleDropdownClick("Files")}>
          Files
        </div>
        {dropdownClicked === "Files" ? (
          <DropdownMenu
            dropdownItems={["hello", "there"]}
            top="55"
            left="250"
          />
        ) : null}
        <div
          className="dropper"
          onClick={() => handleDropdownClick("Editor Options")}
        >
          Editor Options
        </div>
        {dropdownClicked === "Editor Options" ? (
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

export default Header;
