import React from "react";
//import "./ProgressBar.csx"

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;