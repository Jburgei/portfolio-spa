import { useState } from "react";

import Header from "./components/Header.jsx";
import ProjectList from "./components/ProjectList.jsx";
import AddProjectForm from "./components/AddProject.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const filteredProjects = projects.filter((p) =>
    (p?.title || "").toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <div className="container">
        <Header />

        <div className="card">
          <h2 className="section-title">Add Project</h2>
          <AddProjectForm addProject={addProject} />
        </div>

        <div className="card">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="card">
          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}

export default App;