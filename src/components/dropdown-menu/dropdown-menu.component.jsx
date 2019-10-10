import React from "react";

import "./dropdown-menu.styles.scss";

const DropdownMenu = ({ dropdownItems, top, left }) => (
  <div className="dropdown-menu" style={{ top: `${top}px`, left: `${left}px` }}>
    <div className="dropdown-items">
      {dropdownItems.map(item => (
        <div key={item}>{item}</div>
      ))}
    </div>
  </div>
);

export default DropdownMenu;
