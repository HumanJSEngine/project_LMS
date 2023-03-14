import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
