import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

/**
 * Creating a Web app to write and view Latex files.
 * TODO: Create folder structure on Front-End, should be toggled with Ctrl-b
 * TODO: Create User-Profile for Front-End
 * TODO: Add a small div sliver between the editor and viewer so that you can cahnge the sizing
 * ! Create Back end on heroku that will compile pdf and send back to Front-End
 */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
