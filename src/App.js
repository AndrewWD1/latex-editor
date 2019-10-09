import React from "react";
import EditorViewerContainer from "./components/editor-viewer-container/editor-viewer-container.component";
import Header from "./components/header/header.component";

import "./App.scss";

const App = () => (
  <div className="app">
    <Header />
    <EditorViewerContainer />
  </div>
);

export default App;
