import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { routers } from "./routes";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
