import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

/**
 * Creating a Web app to write and view Latex files.
 * TODO: Move the dropdown clicked state up to redux, so that you can make it so that if a user clicks anywhere else on the screen the dropdown hides itself
 * TODO: Create folder structure on Front-End, should be toggled with Ctrl-b
 * TODO: Create User-Profile for Front-End
 * TODO: Users should be able to edit theme
 * TODO: Users should be able to pick font
 * TODO: Add a small div sliver between the editor and viewer so that you can cahnge the sizing
 * ! Create Back end on heroku that will compile pdf and send back to Front-End
 */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
