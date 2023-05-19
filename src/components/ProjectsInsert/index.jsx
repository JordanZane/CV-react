import React from 'react';

const ProjectsInsert = ({ projet }) => {
  return (
    <li>
      <div className="img-container"></div>
      <div className="infos-container">
        <h4>{projet.name}</h4>
      </div>
    </li>
  );
};

export default ProjectsInsert;
