import React from "react";
import "./folder-container.styles.scss";

export const FolderContainer = ({ height, width }) => (
  <div
    className="folder-container"
    style={{ height: `${height}px`, width: `${width}px` }}
  >
    <div>hello</div>
    <div>there</div>
  </div>
);
