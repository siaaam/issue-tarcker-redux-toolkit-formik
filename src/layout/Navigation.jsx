import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="w-full bg-slate-200 flex justify-between items-center p-4">
      <h1 className="font-bold text-lg">Issue Tracker</h1>
      <ul className="flex justify-between items-center gap-5">
        <li>
          <Link className="hover:text-cyan-700" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-cyan-700" to="/issues">
            Issues
          </Link>
        </li>
        <li className="bg-slate-400 px-4 py-2 rounded-md hover:bg-slate-700 hover:text-white">
          <Link to="/add-issue">Add Issue</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
