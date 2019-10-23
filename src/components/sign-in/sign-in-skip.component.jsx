import React from "react";
import { connect } from "react-redux";

import { signInDefault } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignInSkip = ({ signInDefault }) => (
  <div className="skip-sign-in-button" onClick={signInDefault}>
    Skip sign in to view App
  </div>
);

const mapDispatchToProps = dispatch => ({
  signInDefault: () => dispatch(signInDefault())
});

export default connect(
  null,
  mapDispatchToProps
)(SignInSkip);
