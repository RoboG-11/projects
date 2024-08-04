import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import ErrorFallback from "./ui/ErrorFallback.jsx";

import { ErrorBoundary } from "react-error-boundary";
import { StyleSheetManager } from "styled-components";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <StyleSheetManager shouldForwardProp={() => true}>
        <App />
      </StyleSheetManager>

    </ErrorBoundary>
  </React.StrictMode>
);
