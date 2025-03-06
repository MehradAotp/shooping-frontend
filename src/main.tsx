import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import QueryProvider from "./Provider/QueryProvider.tsx";
import theme from "./theme/theme.tsx";
import { ThemeProvider } from "@mui/material/styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>
);
