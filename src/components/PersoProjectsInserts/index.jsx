import React from 'react';
import bobsBurgerWorld from '../../assets/images/projects/bobsburgerworld.jpg';
import DuckList from '../../assets/images/projects/duck-list.jpg';
import InstantWeather from '../../assets/images/projects/instant-weather.jpg';
import Janken from '../../assets/images/projects/janken.jpg';
import zQuizz from '../../assets/images/projects/z-quizz.jpg';

const PersoProjectsInserts = () => {
  return (
    <div>
      <h2>Projets personnels</h2>
      <ul className="projects-container">
        <li className="project project-perso">
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
              <span>API</span>
              <span>ReactJs</span>
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
        </li>
        <li className="project project-perso">
          <div className="img-container">
            <img src={bobsBurgerWorld} alt="Bob's Burger World" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bobsburgerworld.jordanzanetti.fr/"
            >
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
          <div className="infos-container">
            <h4>Bob's Burger World</h4>
            <h5>Projet personnel</h5>
            <p>
              <strong>
                Site d'affichage des informations d'une série télévisée
                Américaine via une API
              </strong>
            </p>

            <p className="technologies">
              <strong>Technologies :</strong> <span>Html5</span>
              <span>Sass</span>
              <span>JavaScript</span>
              <span>ReactJs</span>
            </p>
            <div className="btn-container">
              <a
                className="btn-style"
                target="_blank"
                rel="noreferrer"
                href="https://bobsburgerworld.jordanzanetti.fr/"
              >
                Visiter le site
              </a>
              <a
                className="btn-style"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JordanZane/Bobs-Burger-World"
              >
                Voir le code
              </a>
            </div>
          </div>
        </li>
        <li className="project project-perso">
          <div className="img-container">
            <img src={DuckList} alt="Duck List" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://duck-list.jordanzanetti.fr/"
            >
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
          <div className="infos-container">
            <h4>Duck list</h4>
            <h5>Projet personnel</h5>
            <p>
              <strong>Site de création de liste</strong>
            </p>

            <p className="technologies">
              <strong>Technologies :</strong> <span>Html5</span>
              <span>Sass</span>
              <span>JavaScript</span>
              <span>LocalStorage</span>
            </p>
            <a
              className="btn-style"
              target="_blank"
              rel="noreferrer"
              href="https://duck-list.jordanzanetti.fr/"
            >
              Visiter le site
            </a>
          </div>
        </li>
        <li className="project project-perso">
          <div className="img-container">
            <img src={InstantWeather} alt="Instant Weather" />
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
              <a
                className="btn-style"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JordanZane/instant-weather"
              >
                Voir le code
              </a>
            </div>
          </div>
        </li>
        <li className="project perso-project">
          <div className="img-container">
            <img src={Janken} alt="Janken Game" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://janken-game.jordanzanetti.fr/"
            >
              <i className="fa-solid fa-eye"></i>
            </a>
          </div>
          <div className="infos-container">
            <h4>Janken Game</h4>
            <h5>Projet personnel</h5>
            <p>
              <strong>Site web du célébre jeu : Pierre Feuille Ciseaux</strong>
            </p>

            <p className="technologies">
              <strong>Technologies :</strong> <span>Html5</span>
              <span>Sass</span>
              <span>JavaScript</span>
              <span>LocalStorage</span>
            </p>
            <div className="btn-container">
              <a
                className="btn-style"
                target="_blank"
                rel="noreferrer"
                href="https://janken-game.jordanzanetti.fr/"
              >
                Visiter le site
              </a>
              <a
                className="btn-style"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JordanZane/Janken-Game"
              >
                Voir le code
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PersoProjectsInserts;
