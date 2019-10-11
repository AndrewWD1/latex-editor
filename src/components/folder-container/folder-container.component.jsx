import React from "react";
import "./folder-container.styles.scss";

export const FolderContainer = ({ height, width }) => (
  <div
    className="folder-container"
    style={{ height: `${height}px`, width: `${width}px` }}
  >
    <div className="folder">Folder</div>
    <div className="folder-item">file</div>
    <div className="folder-item">file</div>
    <div className="folder">Folder</div>
    <div className="folder-item">file</div>
    <div className="folder-item">file</div>
    <div className="folder">Folder</div>
    <div className="folder-item">file</div>
  </div>
);
