import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";
import { ThemeProvider } from "@mui/material";
// import { ScrollToTop } from "./components/ui/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const persistor = persistStore(store);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
);
