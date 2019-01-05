import React from "react";
import { Link } from "react-router-dom";

const createProjectButton = () => {
  return (
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-info">
        Create Project
      </Link>
    </React.Fragment>
  );
};

export default createProjectButton;
