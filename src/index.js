import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/main.js";



const container = document.getElementsByClassName("app-container")[0];
ReactDom.hydrate(<App />, container);