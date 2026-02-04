const ProjectItem = ({ project }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project?.title}</h3>
      <p className="project-desc">{project?.description}</p>
    </div>
  );
};

export default ProjectItem;