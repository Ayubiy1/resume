import "./App.css";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import HomePage from "./components/home";
import ProjectsP from "./pages/Projects";
import CreateResume from "./pages/create-resume";

function App() {
  const login = useSelector((state) => state.login1);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="projects" element={<ProjectsP />} />
          <Route path="design" element={<CreateResume />} />
        </Route>

        <Route path="/login" element={<>Login</>} />
      </Routes>
    </div>
  );
}

export default App;
