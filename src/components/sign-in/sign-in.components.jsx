import React, { useState } from "react";
import { connect } from "react-redux";

import {
  signInStart,
  registerStart,
  setErrorOnSignInOrRegister
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = ({
  signInStart,
  registerStart,
  clearErrorOnSignInOrRegister
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, fn) => {
    clearErrorOnSignInOrRegister();
    fn(e.target.value);
  };

  return (
    <form className="sign-in">
      <div className="title">
        LATEX EDITOR
        <br /> SIGN IN
      </div>
      <label className="label">Name</label>
      <input
        value={name}
        className="input"
        onChange={e => handleChange(e, setName)}
      />
      <label className="label">Email</label>
      <input
        value={email}
        type={email}
        className="input"
        onChange={e => handleChange(e, setEmail)}
      />
      <label className="label">Password</label>
      <input
        type="password"
        value={password}
        className="input"
        onChange={e => handleChange(e, setPassword)}
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
          onClick={() => registerStart(name, email, password)}
        >
          Register
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  signInStart: (email, password) => dispatch(signInStart(email, password)),
  registerStart: (name, email, password) =>
    dispatch(registerStart(name, email, password)),
  clearErrorOnSignInOrRegister: () => dispatch(setErrorOnSignInOrRegister(null))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
