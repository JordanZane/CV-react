import React from 'react';
import ProProjectsInserts from '../ProProjectsInserts';
import PersoProjectsInserts from '../PersoProjectsInserts';

const ProjectsPageInserts = ({ showProProjects }) => {
  return (
    <div>
      {showProProjects === null && (
        <div>
          <ProProjectsInserts />
          <PersoProjectsInserts />
        </div>
      )}

      {showProProjects === true && <ProProjectsInserts />}

      {showProProjects === false && <PersoProjectsInserts />}
    </div>
  );
};

export default ProjectsPageInserts;
