import React, { useEffect } from "react";
import EditorViewerContainer from "./components/editor-viewer-container/editor-viewer-container.component";
import Header from "./components/header/header.component";
import SignIn from "./components/sign-in/sign-in.components";
import SignInSkip from "./components/sign-in/sign-in-skip.component";
import { connect } from "react-redux";
import { handleResize } from "./redux/screen/screen.actions";
import { toggleEditorViewer } from "./redux/screen/screen.actions";

import "./App.scss";

const App = ({
  signedIn,
  handleResize,
  errorOnSignInOrRegister,
  loading,
  width,
  height,
  toggleEditorViewer,
}) => {
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    handleResize();
    if (width < 860) {
      toggleEditorViewer("viewer");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  });

  if (!signedIn)
    return (
      <div className={`not-signed-in${loading ? " loading" : ""}`}>
        <SignIn error={errorOnSignInOrRegister} />
        {errorOnSignInOrRegister && (
          <div className="error-message">{errorOnSignInOrRegister}</div>
        )}
        <SignInSkip />
      </div>
    );

  return (
    <div className={`app${loading ? " loading" : ""}`}>
      <Header />
      <EditorViewerContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  signedIn: state.user.signedIn,
  errorOnSignInOrRegister: state.user.errorOnSignInOrRegister,
  loading: state.user.loading,
  width: state.screen.windowWidth,
  height: state.screen.windowHeight,
});

const mapDipsatchToProps = (dispatch) => ({
  handleResize: () => dispatch(handleResize()),
  toggleEditorViewer: (str) => dispatch(toggleEditorViewer(str)),
});

export default connect(mapStateToProps, mapDipsatchToProps)(App);
