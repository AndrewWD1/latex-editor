import React from "react";
import { connect } from "react-redux";

import { signIn } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignInSkip = ({ signIn }) => (
  <div className="skip-sign-in-button" onClick={signIn}>
    Skip sign in to view App
  </div>
);

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(signIn())
});

export default connect(
  null,
  mapDispatchToProps
)(SignInSkip);
