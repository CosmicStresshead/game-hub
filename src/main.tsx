//REACT IMPORTS
import React from "react";
import ReactDOM from "react-dom/client";
// THIRD PARTY IMPORTS
import { ChakraProvider } from "@chakra-ui/react";
// PROJECT IMPORTS
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
