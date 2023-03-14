import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { routers } from "./routes";

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={routers} />
    </RecoilRoot>
  );
}

export default App;
