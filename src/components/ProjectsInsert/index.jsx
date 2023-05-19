import React from 'react';

const ProjectsInsert = ({ projet }) => {
  return (
    <li>
      <div className="img-container">
        <img src={projet.imageUrl} alt={projet.name} />
      </div>
      <div className="infos-container">
        <h4>{projet.name}</h4>
        <h5>{projet.category}</h5>
        <p>{projet.description}</p>
        <a target="_blank" rel="noreferrer" href={projet.url}>
          Visiter le site
        </a>
      </div>
    </li>
  );
};

export default ProjectsInsert;
