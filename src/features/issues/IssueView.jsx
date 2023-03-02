import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteIssue } from "./issueSlice";

const IssueView = () => {
  const issues = useSelector((state) => state.issuesReducer);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteIssue(id));
  };
  return (
    <div>
      <h2 className="text-3xl text-center py-4">List of Issues</h2>

      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold text-left">ID</th>
            <th className="p-3 text-sm font-semibold text-left">Title</th>
            <th className="p-3 text-sm font-semibold text-left">Assigned To</th>
            <th className="p-3 text-sm font-semibold text-left">Priority</th>
            <th className="p-3 text-sm font-semibold text-left">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50 border border-gray-200">
          {issues &&
            issues.map((issue) => {
              const { id, title, assignedTo, priority } = issue;
              return (
                <tr key={id}>
                  <td className="p-3 text-sm text-left">{id}</td>
                  <td className="p-3 text-sm text-left">{title}</td>
                  <td className="p-3 text-sm text-left">{assignedTo}</td>
                  <td className="p-3 text-sm text-left">{priority}</td>
                  <td className="p-3 text-sm text">
                    <Link
                      state={{ id, title, assignedTo, priority }}
                      to={`edit/${id}`}
                    >
                      Edit
                    </Link>
                    <button onClick={() => handleDelete(id)}>Delete</button>
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
