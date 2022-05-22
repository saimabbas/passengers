import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ContextProvider } from "./contexts/wallet-context";
import HooksWrapper from "./HooksWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Web3ContextProvider>
      <HooksWrapper>
        <App />
      </HooksWrapper>
    </Web3ContextProvider>

    {/* </BrowserRouter> */}
  </React.StrictMode>
);
reportWebVitals();
