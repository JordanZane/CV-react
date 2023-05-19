import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectsInsert from '../ProjectsInsert';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('/datas/projects.json')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  }, []);

  return (
    <section id="projects" className="section container projects-section">
      <div className="row">
        <div className="col-lg-12">
          <h2>Projets</h2>
          <ul className="projects-container">
            {data.map((projet, index) => (
              <ProjectsInsert key={index} projet={projet} />
            ))}
          </ul>
          <div className="btn-container"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
