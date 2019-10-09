import React from "react";
import Editor from "../editor/editor.component";
import Viewer from "../viewer/viewer.component";

import "./editor-viewer-container.styles.scss";

const EditorViewerContainer = () => (
  <div className="editor-viewer-container">
    <Editor />
    <Viewer />
  </div>
);

export default EditorViewerContainer;
