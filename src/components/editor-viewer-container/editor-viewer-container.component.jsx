import React from "react";
import Editor from "../editor/editor.component";
import Viewer from "../viewer/viewer.component";
import { connect } from "react-redux";

import "./editor-viewer-container.styles.scss";

const EditorViewerContainer = ({ width, height }) => {
  return (
    <div
      className="editor-viewer-container"
      style={{ height: `${height - 72}` }}
    >
      <Editor width={width} height={height - 72} />
      <Viewer width={width} height={height - 75} />
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.screen.windowWidth,
  height: state.screen.windowHeight
});

export default connect(mapStateToProps)(EditorViewerContainer);
