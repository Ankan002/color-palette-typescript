import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { RecoilRoot } from "recoil";
import "./index.css";
import { ColorLoader } from "components/elements";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ColorLoader />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
