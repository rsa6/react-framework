import React from "react";
import ReactDOM from "react-dom";

const title = "sing good";

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById("app") 
);

module.hot.accept();