import React from 'react';
import lalojaImage from '../../assets/images/projects/laloja.jpg';
import fermePetellesImage from '../../assets/images/projects/fermedespetelles.jpg';
import centreTherapieManuelle from '../../assets/images/projects/centretherapiemanuelle.jpg';
import bobsBurgerWorld from '../../assets/images/projects/bobsburgerworld.jpg';
import ilpizzico from '../../assets/images/projects/ilpizzico.jpg';
import CentreFormationReflexologie from '../../assets/images/projects/centre-formation-reflexologie.jpg';
import DuckList from '../../assets/images/projects/duck-list.jpg';
import InstantWeather from '../../assets/images/projects/instant-weather.jpg';
import Janken from '../../assets/images/projects/janken.jpg';
import O3Architecture from '../../assets/images/projects/o3-architecture.jpg';
import Efitax from '../../assets/images/projects/efitax.jpg';

const ProjectsPageInserts = ({ showProProjects }) => {
  return (
    <ul className="projects-container">
      <li
        className={`project hidden project-pro ${
          showProProjects ? '' : 'd-none'
        }`}
      >
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
      <li
        className={`project hidden project-pro ${
          showProProjects ? '' : 'd-none'
        }`}
      >
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
      </li>
      <li
        className={`project hidden project-pro ${
          showProProjects ? '' : 'd-none'
        }`}
      >
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
      <li
        className={`project hidden project-perso ${
          showProProjects ? 'd-none' : ''
        }`}
      >
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
      <li
        className={`project hidden project-pro ${
          showProProjects ? '' : 'd-none'
        }`}
      >
        <div className="img-container">
          <img src={ilpizzico} alt="Ilpizzico" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.ilpizzico.lu/fr"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>Ilpizzico</h4>
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
            <span>JavaScript</span>
            <span>Photoshop</span>
          </p>
          <a
            className="btn-style"
            target="_blank"
            rel="noreferrer"
            href="https://www.ilpizzico.lu/fr"
          >
            Visiter le site
          </a>
        </div>
      </li>
      <li
        className={`project hidden project-pro ${
          showProProjects ? '' : 'd-none'
        }`}
      >
        <div className="img-container">
          <img src={CentreFormationReflexologie} alt="Académie du Bien-Être" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.academiedubienetre.be/fr/accueil"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>Académie du Bien-Être</h4>
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
            href="https://www.academiedubienetre.be/fr/accueil"
          >
            Visiter le site
          </a>
        </div>
      </li>
      <li
        className={`project hidden project-perso ${
          showProProjects ? 'd-none' : ''
        }`}
      >
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
      <li
        className={`project hidden project-perso ${
          showProProjects ? 'd-none' : ''
        }`}
      >
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
      <li
        className={`project hidden project-perso ${
          showProProjects ? 'd-none' : ''
        }`}
      >
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
      <li
        className={`project hidden project-pro ${
          showProProjects ? '' : 'd-none'
        }`}
      >
        <div className="img-container">
          <img src={O3Architecture} alt="O3-Architecture" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.o3-architecture.com/fr"
          >
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>O3-Architecture</h4>
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
            <span>BootStrap</span>
            <span>Sass</span>
            <span>JavaScript</span>
            <span>Photoshop</span>
          </p>
          <a
            className="btn-style"
            target="_blank"
            rel="noreferrer"
            href="https://www.o3-architecture.com/fr"
          >
            Visiter le site
          </a>
        </div>
      </li>
      <li
        className={`project hidden project-pro ${
          showProProjects ? '' : 'd-none'
        }`}
      >
        <div className="img-container">
          <img src={Efitax} alt="Efitax" />
          <a target="_blank" rel="noreferrer" href="https://www.efitax.lu/fr">
            <i className="fa-solid fa-eye"></i>
          </a>
        </div>
        <div className="infos-container">
          <h4>Efitax</h4>
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
            href="https://www.efitax.lu/fr"
          >
            Visiter le site
          </a>
        </div>
      </li>
    </ul>
  );
};
//
export default ProjectsPageInserts;
