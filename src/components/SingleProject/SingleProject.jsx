import React from "react";
import "./SingleProject.module.css";
const SingleProject = ({ proj, getSingle }) => {
  return (
    <>
      <div className="col-md-4" onClick={() => getSingle(proj.id)}>
        <img src={proj?.src} className="w-100" />
      </div>
    </>
  );
};
export default SingleProject;
