import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateIssue } from "./issueSlice";

const EditIssue = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState(location.state.id);
  const [assignedTo, setAssignedTo] = useState(location.state.assignedTo);
  const [priority, setPriority] = useState(location.state.priority);
  const [title, setTitle] = useState(location.state.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateIssue({ id, assignedTo, priority, title }));
    navigate("/issues");
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="assignedTo">Assigned To</label>
          <input
            type="text"
            name="assignedTo"
            id="assignedTo"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Issue</button>
      </form>
    </div>
  );
};

export default EditIssue;
