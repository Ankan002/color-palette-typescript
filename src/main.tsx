import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { RecoilRoot } from "recoil";
import "./index.css";
import { ColorLoader, CustomToaster } from "components/elements";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ColorLoader />
      <App />
      <CustomToaster />
    </RecoilRoot>
  </React.StrictMode>
);
