import React from "react";
import { connect } from "react-redux";

import { signInDefaultStart } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignInSkip = ({ signInDefaultStart }) => (
  <div className="skip-sign-in-button" onClick={signInDefaultStart}>
    Skip sign in to view App
  </div>
);

const mapDispatchToProps = dispatch => ({
  signInDefaultStart: () => dispatch(signInDefaultStart())
});

export default connect(
  null,
  mapDispatchToProps
)(SignInSkip);
