import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Global Styles
import "./index.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/layout.css";

// Layout Styles
import "./styles/sidebar.css";
import "./styles/topbar.css";

// Component Styles
import "./styles/MetricCard.css";
import "./components/cards/StatCard.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);