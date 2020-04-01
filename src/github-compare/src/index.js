import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import GlobalStyle from "./styles/global";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
