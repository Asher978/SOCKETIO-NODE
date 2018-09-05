import React from "react";
import { render } from "react-dom";
import AppRoot from "./components/AppRoot";

function main() {
  render(<AppRoot />, document.querySelector("#root"));
}

document.addEventListener("DOMContentLoaded", main);
