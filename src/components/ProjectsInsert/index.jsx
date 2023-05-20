import React from 'react';
import lalojaImage from '../../assets/images/laloja.jpg';

const ProjectsInsert = () => {
  return (
    <ul className="projects-container">
      <li className="project-odd">
        <div className="img-container">
          <img src={lalojaImage} alt="La Loja" />
        </div>
        <div className="infos-container">
          <h4>La Loja</h4>
          <h5>
            Site e-commerce. Réalisé sur
            <strong> Prestashop</strong>
          </h5>
          <p>
            Mon rôle : Configuration du back-office, recherche & installation
            des modules. Intégration de la maquette
          </p>
          <p>
            Technologies : <span>Prestashop</span>
            <span>Sass</span>
          </p>
          <a target="_blank" rel="noreferrer" href="https://laloja.be/">
            Visiter le site
          </a>
        </div>
      </li>
      <li className="project-even">
        <div className="infos-container">
          <h4>La Loja</h4>
          <h5>
            Site e-commerce Home-Store & Epicerie fine. Réalisé sur
            <strong> Prestashop</strong>
          </h5>
          <p>
            Mon rôle : Configuration du back-office, recherche & installation
            des modules. Intégration de la maquette
          </p>
          <p>
            Technologies : <span>Prestashop</span>
            <span>Sass</span>
          </p>
          <a target="_blank" rel="noreferrer" href="https://laloja.be/">
            Visiter le site
          </a>
        </div>
        <div className="img-container">
          <img src={lalojaImage} alt="La Loja" />
        </div>
      </li>
      <li className="project-odd">
        <div className="img-container">
          <img src={lalojaImage} alt="La Loja" />
        </div>
        <div className="infos-container">
          <h4>La Loja</h4>
          <h5>
            Site e-commerce Home-Store & Epicerie fine. Réalisé sur
            <strong> Prestashop</strong>
          </h5>
          <p>
            Mon rôle : Configuration du back-office, recherche & installation
            des modules. Intégration de la maquette
          </p>
          <p>
            Technologies : <span>Prestashop</span>
            <span>Sass</span>
          </p>
          <a target="_blank" rel="noreferrer" href="https://laloja.be/">
            Visiter le site
          </a>
        </div>
      </li>
      <li className="project-even">
        <div className="infos-container">
          <h4>La Loja</h4>
          <h5>
            Site e-commerce Home-Store & Epicerie fine. Réalisé sur
            <strong> Prestashop</strong>
          </h5>
          <p>
            Mon rôle : Configuration du back-office, recherche & installation
            des modules. Intégration de la maquette
          </p>
          <p>
            Technologies : <span>Prestashop</span>
            <span>Sass</span>
          </p>
          <a target="_blank" rel="noreferrer" href="https://laloja.be/">
            Visiter le site
          </a>
        </div>
        <div className="img-container">
          <img src={lalojaImage} alt="La Loja" />
        </div>
      </li>
    </ul>
  );
};

export default ProjectsInsert;
