import React from "react";

const Badge = ({ priority }) => {
  switch (priority) {
    case "high":
      return (
        <p className="shadow-md text-center font-bold bg-red-500 text-white text-xs rounded-full px-3 py-1">
          High
        </p>
      );
    case "low":
      return (
        <div className="shadow-md text-center font-bold bg-green-500 text-white text-xs rounded-full px-3 py-1">
          Low
        </div>
      );
    case "medium":
      return (
        <div className="shadow-md text-center font-bold bg-orange-500 text-white text-xs rounded-full px-3 py-1">
          Medium
        </div>
      );
    default:
      return null;
  }
};

export default Badge;
