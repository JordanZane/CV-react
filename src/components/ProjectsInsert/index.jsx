import React from 'react';
import lalojaImage from '../../assets/images/projects/laloja.jpg';
import fermePetellesImage from '../../assets/images/projects/fermedespetelles.jpg';
import centreTherapieManuelle from '../../assets/images/projects/centretherapiemanuelle.jpg';
import bobsBurgerWorld from '../../assets/images/projects/bobsburgerworld.jpg';

const ProjectsInsert = () => {
  return (
    <ul className="projects-container">
      <li className="project-odd">
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
      <li className="project-even">
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
      <li className="project-odd">
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
      <li className="project-even">
        <div className="infos-container">
          <h4>Bob's Burger World</h4>
          <h5>Projet personnel</h5>
          <p>
            <strong>
              Site d'affichage des informations d'une série télévisée Américaine
              via une API
            </strong>
          </p>

          <p className="technologies">
            <strong>Technologies :</strong> <span>Html5</span>
            <span>Sass</span>
            <span>JavaScript</span>
            <span>ReactJs</span>
          </p>
          <a
            className="btn-style"
            target="_blank"
            rel="noreferrer"
            href="https://bobsburgerworld.jordanzanetti.fr/"
          >
            Visiter le site
          </a>
        </div>
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
      </li>
    </ul>
  );
};

export default ProjectsInsert;
