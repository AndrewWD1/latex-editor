import React from "react";
import Editor from "../editor/editor.component";
import Viewer from "../viewer/viewer.component";
import { connect } from "react-redux";

import "./editor-viewer-container.styles.scss";

const EditorViewerContainer = ({ width, height }) => {
  return (
    <div
      className="editor-viewer-container"
      style={{ height: `${height - 73}` }}
    >
      {true ? <Editor width={width} height={height - 73} /> : null}
      {true ? <Viewer width={width} height={height - 76} /> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  width: state.screen.windowWidth,
  height: state.screen.windowHeight
});

export default connect(mapStateToProps)(EditorViewerContainer);
