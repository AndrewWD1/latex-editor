import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

render(
  <Provider store={store}>
    <div
      style={{
        color: "white",
        textAlign: "center",
        fontSize: "2rem",
        margin: "2rem",
      }}
    >
      This site has been taken down for the time being.
    </div>
  </Provider>,
  document.getElementById("root")
);
