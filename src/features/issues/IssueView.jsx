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
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Assigned To
            </th>
            <th scope="col" className="px-6 py-3">
              Priority
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {issues &&
            issues.map((issue) => {
              const { id, title, assignedTo, priority } = issue;
              return (
                <tr
                  key={id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {id}
                  </th>
                  <td className="px-6 py-4 capitalize">{title}</td>
                  <td className="px-6 py-4 capitalize">{assignedTo}</td>
                  <td className="px-6 py-4 capitalize">{priority}</td>
                  <td className="px-6 py-4">
                    <Link
                      state={{ id, title, assignedTo, priority }}
                      to={`edit/${id}`}
                      className="bg-slate-400 text-neutral-100 px-4 py-2 rounded-md mr-2 hover:bg-slate-500 hover:text-neutral-200"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-300 px-4 py-2 rounded-md text-neutral-50 hover:bg-red-400"
                      onClick={(id) => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* <table className="w-full">
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
      </table> */}
    </div>
  );
};

export default IssueView;
