import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Home from "./components/home";
import HomePage from "./components/home-page";

function App() {
  const login = useSelector((state) => state.login1);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="px-14 py-2">
              <Home />
              <HomePage />
            </div>
          }
        />
        <Route path="/login" element={<>Login</>} />
      </Routes>
    </div>
  );
}

export default App;
