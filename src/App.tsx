import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { RecoilRoot } from "recoil";
import ManageScore from "./pages/ManageScore";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="managescore" element={<ManageScore />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
