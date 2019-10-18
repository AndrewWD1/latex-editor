import React, { useState } from "react";
import { connect } from "react-redux";

import { signIn } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ signIn }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="sign-in">
      <div className="title">
        LATEX EDITOR
        <br /> SIGN IN
      </div>
      <label className="label">First Name</label>
      <input
        value={firstName}
        className="input"
        onChange={e => setFirstName(e.target.value)}
      />
      <label className="label">Last Name</label>
      <input
        value={lastName}
        className="input"
        onChange={e => setLastName(e.target.value)}
      />
      <label className="label">Password</label>
      <input
        type="password"
        value={password}
        className="input"
        onChange={e => setPassword(e.target.value)}
      />
      <div className="sign-ins">
        <div className="sign-in-button" onClick={signIn}>
          Sign in
        </div>
        <div className="sign-in-button" onClick={signIn}>
          Register
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  signIn: () => dispatch(signIn())
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
