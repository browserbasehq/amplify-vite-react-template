import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

// Make backend optional - won't crash if amplify_outputs.json doesn't exist
try {
  const outputs = await import("../amplify_outputs.json");
  Amplify.configure(outputs.default);
} catch (error) {
  console.warn("Backend not configured - running in frontend-only mode");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
