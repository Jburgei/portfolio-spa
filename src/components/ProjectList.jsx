import ProjectItem from "./ProjectItem.jsx";

const ProjectList = ({ projects = [] }) => {
  if (projects.length === 0) return <p className="empty">No projects yet.</p>;

  return (
    <div className="project-list">
      {projects.map((p, index) => (
        <ProjectItem key={index} project={p} />
      ))}
    </div>
  );
};

export default ProjectList;