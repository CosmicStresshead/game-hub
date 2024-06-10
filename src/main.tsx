// REACT IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";

// THIRD PARTY IMPORTS
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// PROJECT IMPORTS
import App from "./App";
import theme from "./theme";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
