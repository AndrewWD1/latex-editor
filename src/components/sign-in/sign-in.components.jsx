import React, { useState } from "react";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="sign-in">
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
      <div></div>
    </form>
  );
};

export default SignIn;
