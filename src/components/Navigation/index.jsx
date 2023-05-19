import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Fonction pour vérifier la visibilité de la section au scroll
    const handleScroll = () => {
      const topPage = document.getElementById('top-page');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      if (isElementVisible(topPage)) {
        setActiveLink('#top-page');
      } else if (isElementVisible(skillsSection)) {
        setActiveLink('#skills');
      } else if (isElementVisible(projectsSection)) {
        setActiveLink('#projects');
      } else if (isElementVisible(contactSection)) {
        setActiveLink('#contact');
      }
    };

    // Vérifie la visibilité de l'élément dans la fenêtre
    const isElementVisible = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    // Ajoute un écouteur d'événement pour le scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Nettoie l'écouteur d'événement lorsque le composant est démonté
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (event, link) => {
    event.preventDefault();
    setActiveLink(link);
    document.querySelector(link).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul>
              <li>
                <a
                  href="#top-page"
                  className={activeLink === '#top-page' ? 'active' : ''}
                  onClick={(event) => handleClick(event, '#top-page')}
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeLink === '#skills' ? 'active' : ''}
                  onClick={(event) => handleClick(event, '#skills')}
                >
                  Compétences
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeLink === '#projects' ? 'active' : ''}
                  onClick={(event) => handleClick(event, '#projects')}
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeLink === '#contact' ? 'active' : ''}
                  onClick={(event) => handleClick(event, '#contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
