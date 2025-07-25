import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgote from "./pages/Forgote";
import Project from "./pages/projects";
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Forgote" element={<Forgote />} />
      <Route path="/project" element={<ProtectedRoute><Project /></ProtectedRoute>} />
    </Routes>
  );
};

export default App;