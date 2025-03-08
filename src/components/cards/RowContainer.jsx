import React from "react";
import "./RowContainer.css";

export default function RowContainer({ children, height }) {
  return (
    <div className="row-container" style={{ flex: height ? `0 0 ${height}%` : "1" }}>
      {children}
    </div>
  );
}
