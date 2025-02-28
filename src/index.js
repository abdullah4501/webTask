import "@fortawesome/fontawesome-free/css/all.min.css"; 
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./dist/css/layout.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Optional: Keeping the reportWebVitals
reportWebVitals();
