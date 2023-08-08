import React from 'react';
import instantWeather from '../../assets/images/projects/instant-weather.jpg';
import zQuizz from '../../assets/images/projects/z-quizz.jpg';
import Moohvies from '../../assets/images/projects/moohvies.jpg';

const ProjectsInsert = () => {
  return (
    <ul className="projects-container">
      <li className="project-odd hidden">
        <div className="img-container">
          <img src={Moohvies} alt="Moohvies" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://moohvies.jordanzanetti.fr/"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>Moohvies</h4>
          <h5>Projet personnel</h5>
          <p>
            <strong>
              Application web permettant de chercher les films les plus
              populaire sortis en 2023
            </strong>
          </p>

          <p className="technologies">
            <strong>Technologies :</strong> <span>Html5</span>
            <span>Sass</span>
            <span>BootStrap</span>
            <span>ReactJs</span>
            <span>API</span>
          </p>
          <div className="btn-container">
            <a
              className="btn-style"
              target="_blank"
              rel="noreferrer"
              href="https://moohvies.jordanzanetti.fr/"
            >
              Visiter le site
            </a>
            <a
              className="btn-style"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JordanZane/moohvies"
            >
              Voir le code
            </a>
          </div>
        </div>
      </li>
      <li className="project-even hidden">
        <div className="infos-container">
          <h4>Z Quizz</h4>
          <h5>Projet personnel</h5>
          <p>
            <strong>
              Application web qui propose une multitude de quizzes classés par
              catégories
            </strong>
          </p>

          <p className="technologies">
            <strong>Technologies :</strong> <span>Html5</span>
            <span>Sass</span>
            <span>BootStrap</span>
            <span>ReactJs</span>
            <span>API</span>
          </p>
          <div className="btn-container">
            <a
              className="btn-style"
              target="_blank"
              rel="noreferrer"
              href="https://z-quizz.jordanzanetti.fr/"
            >
              Visiter le site
            </a>
            <a
              className="btn-style"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/JordanZane/Z-Quizz"
            >
              Voir le code
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={zQuizz} alt="Z Quizz" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://z-quizz.jordanzanetti.fr/"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </li>
      <li className="project-odd hidden">
        <div className="img-container">
          <img src={instantWeather} alt="Z Quizz" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instant-weather.jordanzanetti.fr/"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>Instant Weather</h4>
          <h5>Projet personnel</h5>
          <p>
            <strong>
              Site d'affichage de la météo actuelle selon la ville choisie
            </strong>
          </p>

          <p className="technologies">
            <strong>Technologies :</strong> <span>Html5</span>
            <span>Sass</span>
            <span>JavaScript</span>
            <span>API</span>
          </p>
          <div className="btn-container">
            <a
              className="btn-style"
              target="_blank"
              rel="noreferrer"
              href="https://instant-weather.jordanzanetti.fr/"
            >
              Visiter le site
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ProjectsInsert;
