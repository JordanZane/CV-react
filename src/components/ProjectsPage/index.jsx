import React, { useEffect, useState } from 'react';
import AsideLinks from '../AsideLinks';
import ProjectsPageInserts from '../ProjectsPageInserts';
import ScrollAnim from '../ScrollAnim/scrollanim';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  window.addEventListener('load', function () {});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="projects-page">
      <ScrollAnim />
      <AsideLinks />
      <div id="home-link">
        <Link to="/">
          <i className="fa-solid fa-house"></i>
          <span>Accueil</span>
        </Link>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Mes projets</h1>

            <ProjectsPageInserts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
