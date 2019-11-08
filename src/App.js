import React, { useEffect } from "react";
import EditorViewerContainer from "./components/editor-viewer-container/editor-viewer-container.component";
import Header from "./components/header/header.component";
import SignIn from "./components/sign-in/sign-in.components";
import SignInSkip from "./components/sign-in/sign-in-skip.component";
import { connect } from "react-redux";
import { handleResize } from "./redux/screen/screen.actions";

import "./App.scss";

const App = ({ signedIn, handleResize, errorOnSignInOrRegister }) => {
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
        {errorOnSignInOrRegister && (
          <div className="error-message">{errorOnSignInOrRegister}</div>
        )}
        <SignInSkip />
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
  signedIn: state.user.signedIn,
  errorOnSignInOrRegister: state.user.errorOnSignInOrRegister
});

const mapDipsatchToProps = dispatch => ({
  handleResize: () => dispatch(handleResize())
});

export default connect(
  mapStateToProps,
  mapDipsatchToProps
)(App);
