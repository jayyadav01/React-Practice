import React from "react";
import "../App.css";

const CustomSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-header"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
    </div>
  );
};

export default CustomSkeleton;
