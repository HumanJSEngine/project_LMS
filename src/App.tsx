import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ManageScore from "./pages/ManageScore";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="managescore" element={<ManageScore />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
