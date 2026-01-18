import { useState } from "react";

const AddProjectForm = ({ addProject }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    addProject({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="card">
      <h2 className="form-title">Add Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
