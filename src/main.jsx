import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import { ToggleContextProvider } from "./context/ToggleContext.jsx";
import { EOQContextProvider } from "./context/EoqContext.jsx";
import { QDContextProvider } from "./context/QdContext.jsx";
import { POQContextProvider } from "./context/PoqContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleContextProvider>
      <EOQContextProvider>
        <QDContextProvider>
          <POQContextProvider>
            <App />
          </POQContextProvider>
        </QDContextProvider>
      </EOQContextProvider>
    </ToggleContextProvider>
  </React.StrictMode>
);
