import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { ToggleContextProvider } from "./context/ToggleContext.jsx";
import { EOQContextProvider } from "./context/EoqContext.jsx";
import { QDContextProvider } from "./context/QdContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleContextProvider>
      <EOQContextProvider>
        <QDContextProvider>
          <App />
        </QDContextProvider>
      </EOQContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>
);
