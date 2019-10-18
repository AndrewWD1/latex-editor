import React, { useEffect } from "react";
import EditorViewerContainer from "./components/editor-viewer-container/editor-viewer-container.component";
import Header from "./components/header/header.component";
import SignIn from "./components/sign-in/sign-in.components";
import { connect } from "react-redux";
import { handleResize } from "./redux/screen/screen.actions";

import "./App.scss";

const App = ({ signedIn, handleResize }) => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (!signedIn)
    return (
      <div className="not-signed-in">
        <SignIn />
      </div>
    );

  return (
    <div className="app">
      <Header />
      <EditorViewerContainer />
    </div>
  );
};

const mapStateToProps = state => ({
  signedIn: state.user.signedIn
});

const mapDipsatchToProps = dispatch => ({
  handleResize: () => dispatch(handleResize())
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(App);
