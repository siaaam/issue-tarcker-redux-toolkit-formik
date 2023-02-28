import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addIssue } from "./issueSlice";

const AddIssue = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const numOfIssue = useSelector((state) => state.issuesReducer.length);
  const handleSubmit = (e) => {
    e.preventDefault();
    const issue = { id: numOfIssue + 1, title, assignedTo };
    dispatch(addIssue(issue));
    navigate("/issues");
  };
  return (
    <div>
      <h2>Add Issue</h2>
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
        <button type="submit">Add Issue</button>
      </form>
    </div>
  );
};

export default AddIssue;
