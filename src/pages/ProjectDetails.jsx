import { Link, useParams } from "react-router-dom";

export default function ProjectDetails({ projects = [] }) {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="container">
        <div className="card">
          <h2>Project not found</h2>
          <Link className="btn" to="/">← Back</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="card details">
        <Link className="back" to="/">← Back</Link>

        <h2 className="details-title">{project.title}</h2>
        <p className="details-desc">{project.description}</p>

        <div className="details-meta">
          <span className="pill">Personal Project</span>
          <span className="pill">Showcase</span>
        </div>
      </div>
    </main>
  );
}