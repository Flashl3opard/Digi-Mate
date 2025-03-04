import React from "react";

const Toggle = () => {
  return (
    <div className="absolute">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
