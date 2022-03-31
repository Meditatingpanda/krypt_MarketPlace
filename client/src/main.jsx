import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./style/main.css";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <Router>
        <App />
      </Router>
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
