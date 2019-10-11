import React, { useEffect } from "react";
import EditorViewerContainer from "./components/editor-viewer-container/editor-viewer-container.component";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { handleResize } from "./redux/screen/screen.actions";

import "./App.scss";

const App = ({ handleResize }) => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="app">
      <Header />
      <EditorViewerContainer />
    </div>
  );
};

const mapDipsatchToProps = dispatch => ({
  handleResize: () => dispatch(handleResize())
});

export default connect(
  null,
  mapDipsatchToProps
)(App);
