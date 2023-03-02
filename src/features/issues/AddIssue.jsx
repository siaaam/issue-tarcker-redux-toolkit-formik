import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addIssue } from "./issueSlice";

const AddIssue = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const numOfIssue = useSelector((state) => state.issuesReducer.length);
  const handleSubmit = (e) => {
    e.preventDefault();
    const issue = {
      id: numOfIssue + 1,
      title,
      description,
      assignedTo,
      priority,
    };
    dispatch(addIssue(issue));
    navigate("/issues");
  };
  return (
    <div>
      <h2 className="text-center text-3xl p-4">Add Issue</h2>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Title
              </label>
              <input
                className="border border-[#e0e0e0] w-full px-3 py-3 bg-white rounded-md text-base font-medium  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Description
              </label>
              <textarea
                className="border border-[#e0e0e0] w-full px-3 py-3 bg-white rounded-md text-base font-medium  text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="assignedTo"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Assigned To
              </label>
              <select
                className="border border-[#e0e0e0] px-3 py-3 rounded-md w-[200px]"
                name="assignedTo"
                id="assignedTo"
                onChange={(e) => setAssignedTo(e.target.value)}
              >
                <option value="">Please Select A Option</option>
                <option value="rahim">Rahim</option>
                <option value="karim">Karim</option>
                <option value="jahid">Jahid</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-base font-medium text-gray-900"
                htmlFor="priority"
              >
                Priority
              </label>
              <input
                className="mr-1"
                type="radio"
                id="low"
                name="priority"
                value="low"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label className="mr-3" htmlFor="low">
                Low
              </label>
              <input
                className="mr-1"
                type="radio"
                id="medium"
                name="priority"
                value="medium"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label className="mr-3" htmlFor="medium">
                Medium
              </label>
              <input
                className="mr-1"
                type="radio"
                id="high"
                name="priority"
                value="high"
                onChange={(e) => setPriority(e.target.value)}
              />
              <label className="mr-3" htmlFor="high">
                High
              </label>
            </div>
            <button
              type="submit"
              className="border-gray-700 bg-slate-300 hover:bg-slate-500 hover:text-white px-4 py-2 outline-none rounded-sm shadow-md"
            >
              Add Issue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddIssue;
