import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgote from "./pages/Forgote";
import Project from "./pages/projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Forgote" element={<Forgote />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default App;
