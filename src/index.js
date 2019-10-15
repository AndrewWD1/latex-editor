import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

/**
 * Creating a Web app to write and view Latex files.
 * TODO: Create User-Profile for Front-End
 * ! Create Back end on heroku that will compile pdf and send back to Front-End
 */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
