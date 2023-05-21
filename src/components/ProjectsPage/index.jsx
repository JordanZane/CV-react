import React, { useEffect } from 'react';
import AsideLinks from '../AsideLinks';
import ProjectsPageInserts from '../ProjectsPageInserts';
import ScrollAnim from '../ScrollAnim/scrollanim';

const ProjectsPage = () => {
  window.addEventListener('load', function () {
    const proProjects = document.querySelectorAll('.project-pro');
    const persoProjects = document.querySelectorAll('.project-perso');
    const proBtn = document.querySelector('#pro-btn');
    const persoBtn = document.querySelector('#perso-btn');
    const allBtn = document.querySelector('#all-btn');

    allBtn.addEventListener('click', function () {
      for (let i = 0; i < proProjects.length; i++) {
        proProjects[i].classList.remove('d-none');
      }
      for (let i = 0; i < persoProjects.length; i++) {
        persoProjects[i].classList.remove('d-none');
      }
    });

    proBtn.addEventListener('click', function () {
      for (let i = 0; i < proProjects.length; i++) {
        proProjects[i].classList.remove('d-none');
      }
      for (let i = 0; i < persoProjects.length; i++) {
        persoProjects[i].classList.add('d-none');
      }
    });

    persoBtn.addEventListener('click', function () {
      for (let i = 0; i < persoProjects.length; i++) {
        persoProjects[i].classList.remove('d-none');
      }
      for (let i = 0; i < proProjects.length; i++) {
        proProjects[i].classList.add('d-none');
      }
    });
  });

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="projects-page">
      <ScrollAnim />
      <AsideLinks />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Mes projets</h1>
            <nav>
              <ul>
                <li>
                  <button id="all-btn">Tous</button>
                </li>
                <li>
                  <button id="pro-btn">Professionnels</button>
                </li>
                <li>
                  <button id="perso-btn">Personnels</button>
                </li>
              </ul>
            </nav>
            <ProjectsPageInserts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
