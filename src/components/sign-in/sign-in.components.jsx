import React, { useState } from "react";
import { connect } from "react-redux";

import { signInStart } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({ signInStart }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
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
      <label className="label">Email</label>
      <input
        value={email}
        type={email}
        className="input"
        onChange={e => setEmail(e.target.value)}
      />
      <label className="label">Password</label>
      <input
        type="password"
        value={password}
        className="input"
        onChange={e => setPassword(e.target.value)}
      />
      <div className="sign-ins">
        <div
          className="sign-in-button"
          onClick={() => signInStart(email, password)}
        >
          Sign in
        </div>
        <div
          className="sign-in-button"
          onClick={() => signInStart(email, password)}
        >
          Register
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  signInStart: (email, password) => dispatch(signInStart(email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
