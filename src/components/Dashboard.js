import React, { Component } from "react";
import ProjectItem from "./project/ProjectItem";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1> Welcome to my Dashboard</h1>
        <ProjectItem />
      </div>
    );
  }
}

export default Dashboard;
