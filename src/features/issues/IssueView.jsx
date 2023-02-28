import React from "react";
import { useSelector } from "react-redux";

const IssueView = () => {
  const issues = useSelector((state) => state.issuesReducer);
  console.log(issues);
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
                    <button>Edit</button>
                    <button>Delete</button>
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
