import React, { useEffect } from 'react';
import AsideLinks from '../AsideLinks';
import ProjectsPageInserts from '../ProjectsPageInserts';
import ScrollAnim from '../ScrollAnim/scrollanim';

const ProjectsPage = () => {
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
            <ProjectsPageInserts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
