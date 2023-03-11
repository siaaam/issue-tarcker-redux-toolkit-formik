import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableView from "../../components/TableView";
import { deleteIssue } from "./issueSlice";

const IssueView = () => {
  const issues = useSelector((state) => state.issuesReducer);
  console.log(issues);

  return (
    <div className="w-full">
      <h2 className="text-3xl text-center py-4">List of Issues</h2>
      <div className="max-w-[720px] mx-auto">
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
                const { id, title, assignedTo, priority, description } = issue;
                return (
                  <TableView
                    key={id}
                    id={id}
                    title={title}
                    assignedTo={assignedTo}
                    priority={priority}
                    description={description}
                    deleteIssue={deleteIssue}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueView;
