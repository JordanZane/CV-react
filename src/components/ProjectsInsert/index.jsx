import React from 'react';
import lalojaImage from '../../assets/images/projects/laloja.jpg';
import fermePetellesImage from '../../assets/images/projects/fermedespetelles.jpg';
import centreTherapieManuelle from '../../assets/images/projects/centretherapiemanuelle.jpg';
import bobsBurgerWorld from '../../assets/images/projects/bobsburgerworld.jpg';
import zQuizz from '../../assets/images/projects/z-quizz.jpg';

const ProjectsInsert = () => {
  return (
    <ul className="projects-container">
      <li className="project-odd hidden">
        <div className="img-container">
          <img src={lalojaImage} alt="La Loja" />
          <a target="_blank" rel="noreferrer" href="https://laloja.be/">
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>La Loja</h4>
          <h5>
            Projet professionnel - Réalisé chez :{' '}
            <a
              href="https://www.intermediatic.com/fr"
              target="_blank"
              rel="noreferrer"
            >
              Intermediatic
            </a>
          </h5>
          <p>
            <strong>Site e-commerce - </strong>
            Réalisé sur
            <strong> Prestashop</strong>
          </p>
          <p>
            <strong>Mon rôle : </strong>Configuration du back-office, recherche
            & installation des modules. Intégration de la maquette. Traitement &
            optimisation des images
          </p>
          <p className="technologies">
            <strong>Technologies :</strong> <span>Prestashop</span>
            <span>Sass</span>
            <span>Photoshop</span>
          </p>
          <a
            className="btn-style"
            target="_blank"
            rel="noreferrer"
            href="https://laloja.be/"
          >
            Visiter le site
          </a>
        </div>
      </li>
      <li className="project-even hidden">
        <div className="infos-container">
          <h4>Ferme des Pételles</h4>
          <h5>
            Projet professionnel - Réalisé chez :{' '}
            <a
              href="https://www.intermediatic.com/fr"
              target="_blank"
              rel="noreferrer"
            >
              Intermediatic
            </a>
          </h5>
          <p>
            <strong>Site vitrine - </strong>
            Réalisé sur
            <strong> Wordpress</strong>
          </p>
          <p>
            <strong>Mon rôle : </strong>Configuration du back-office, recherche
            & installation des modules. Intégration de la maquette. Traitement &
            optimisation des images
          </p>
          <p className="technologies">
            <strong>Technologies :</strong> <span>Wordpress</span>
            <span>Sass</span>
            <span>Photoshop</span>
          </p>
          <a
            className="btn-style"
            target="_blank"
            rel="noreferrer"
            href="https://www.fermedespetelles.be/"
          >
            Visiter le site
          </a>
        </div>
        <div className="img-container">
          <img src={fermePetellesImage} alt="Ferme des Pételles" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://fermedespetelles.be/"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
      </li>
      <li className="project-odd hidden">
        <div className="img-container">
          <img src={centreTherapieManuelle} alt="Centre de Therapie Manuelle" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.centredetherapiemanuelle.lu/fr"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>Centre de Thérapie Manuelle</h4>
          <h5>
            Projet professionnel - Réalisé chez :{' '}
            <a
              href="https://www.intermediatic.com/fr"
              target="_blank"
              rel="noreferrer"
            >
              Intermediatic
            </a>
          </h5>
          <p>
            <strong>Site vitrine - </strong>
            Réalisé sur
            <strong> CMS d'entreprise</strong>
          </p>
          <p>
            <strong>Mon rôle : </strong>Configuration des modules. Intégration
            de la maquette. Traitement & optimisation des images
          </p>
          <p className="technologies">
            <strong>Technologies :</strong> <span>Html5</span>
            <span>Sass</span>
            <span>BootStrap</span>
            <span>Photoshop</span>
          </p>
          <a
            className="btn-style"
            target="_blank"
            rel="noreferrer"
            href="https://www.centredetherapiemanuelle.lu/fr"
          >
            Visiter le site
          </a>
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
    </ul>
  );
};

export default ProjectsInsert;
