import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";
import { ThemeProvider } from "@mui/material";
// import { ScrollToTop } from "./components/ui/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ThemeProvider>,
);
