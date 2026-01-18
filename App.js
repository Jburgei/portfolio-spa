import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddProjectForm from "./components/AddProject";
import ProjectList from "./components/ProjectList";
import SearchBar from "./components/SearchBar";

function App() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <AddProjectForm addProject={addProject} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
