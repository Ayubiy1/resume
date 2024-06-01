import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import HomePage from "./components/home";

function App() {
  const login = useSelector((state) => state.login1);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 
          <div className="px-14 py-2">
            <HomePage /> 
            </div>
          */}
        <Route path="/login" element={<>Login</>} />
      </Routes>
    </div>
  );
}

export default App;
