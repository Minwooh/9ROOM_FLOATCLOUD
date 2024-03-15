import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import TeamPage from "./pages/team/TeamPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
