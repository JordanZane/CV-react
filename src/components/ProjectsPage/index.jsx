import React, { useEffect, useState } from 'react';
import AsideLinks from '../AsideLinks';
import ProjectsPageInserts from '../ProjectsPageInserts';
import ScrollAnim from '../ScrollAnim/scrollanim';

const ProjectsPage = () => {
  const [showProProject, setShowProject] = useState(null);

  const handleProBtnClick = () => {
    setShowProject(true);
  };

  const handlePersoBtnClick = () => {
    setShowProject(false);
  };

  const handleAllClick = () => {
    setShowProject(null);
  };

  window.addEventListener('load', function () {});

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
            <nav className="nav-projects">
              <ul>
                <li>
                  <button
                    onClick={handleAllClick}
                    id="all-btn"
                    className={showProProject === null ? 'active' : ''}
                  >
                    Tous
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleProBtnClick}
                    id="pro-btn"
                    className={showProProject ? 'active' : ''}
                  >
                    Professionnels
                  </button>
                </li>
                <li>
                  <button
                    onClick={handlePersoBtnClick}
                    id="perso-btn"
                    className={showProProject === false ? 'active' : ''}
                  >
                    Personnels
                  </button>
                </li>
              </ul>
            </nav>
            <ProjectsPageInserts showProProjects={showProProject} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
