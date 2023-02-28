import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/issues">Issues</Link>
      <Link to="/add-issue">Add Issue</Link>
    </nav>
  );
};

export default Navigation;
