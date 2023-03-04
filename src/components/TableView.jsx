import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Badge from "./Badge";

const TableView = ({
  title,
  assignedTo,
  priority,
  id,
  description,
  deleteIssue,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteIssue(id));
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </th>
      <td className="px-6 py-4 capitalize">{title}</td>
      <td className="px-6 py-4 capitalize">{assignedTo}</td>
      <td className="px-6 py-4 capitalize">
        <Badge priority={priority} />
      </td>
      <td className="px-6 py-4">
        <Link
          state={{ id, title, assignedTo, priority, description }}
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
};

export default TableView;
