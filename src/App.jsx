import { Route, Routes } from "react-router-dom";
import "./App.css";
import EwcLayout from "./layouts";
import {
  AboutPage,
  ContactPage,
  CurrentProjectPage,
  LandingPage,
  ProjectsPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EwcLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="projects">
          <Route index element={<ProjectsPage />} />
          <Route path="current" element={<CurrentProjectPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
