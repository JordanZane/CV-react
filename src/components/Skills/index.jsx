import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="section container skills-section">
      <div className="row">
        <div className="col-lg-12">
          <h2>Compétences</h2>
        </div>
        <div className="col-lg-4">
          <div className="skills-content">
            <h3>
              Front-end <i className="fa-solid fa-code"></i>
            </h3>
            <ul>
              <li>Html5/Css3</li>
              <li>Sass</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="skills-content">
            <h3>
              Outils <i className="fa-solid fa-gear"></i>
            </h3>
            <ul>
              <li>WordPress</li>
              <li>PrestaShop</li>
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>Npm</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="skills-content">
            <h3>
              Autres <i className="fa-solid fa-pen"></i>
            </h3>
            <ul>
              <li>Photoshop</li>
              <li>Adobe XD</li>
              <li>Bash shell</li>
              <li>Seo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
