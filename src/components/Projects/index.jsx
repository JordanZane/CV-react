import React from 'react';
import { Link } from 'react-router-dom';
import ProjectsInsert from '../ProjectsInsert';

const Projects = () => {
  return (
    <section id="projects" className="section container projects-section ">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="hidden">Projets</h2>
          <ProjectsInsert />
          <div className="btn-container hidden">
            <Link className="btn-style" to="/projects">
              Tous mes projets
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
