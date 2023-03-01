import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteIssue } from "./issueSlice";

const IssueView = () => {
  const issues = useSelector((state) => state.issuesReducer);
  console.log(issues);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteIssue(id));
  };
  return (
    <div>
      <h2>List of Issues</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issues &&
            issues.map((issue) => {
              const { id, title, assignedTo, priority } = issue;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{assignedTo}</td>
                  <td>{priority}</td>
                  <td>
                    <Link
                      state={{ id, title, assignedTo, priority }}
                      to={`edit/${id}`}
                    >
                      Edit
                    </Link>
                    <button onClick={(id) => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default IssueView;
