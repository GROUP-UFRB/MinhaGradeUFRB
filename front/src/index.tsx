import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/appbar";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Global = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: "#dfdfdf";
}
`;

root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
