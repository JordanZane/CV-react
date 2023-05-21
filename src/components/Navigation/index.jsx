import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('#top-page');

  useEffect(() => {
    // Fonction pour vérifier la visibilité de la section au scroll
    const handleScroll = () => {
      const topPage = document.getElementById('top-page');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const sections = [
        { id: '#top-page', element: topPage },
        { id: '#skills', element: skillsSection },
        { id: '#projects', element: projectsSection },
        { id: '#contact', element: contactSection },
      ];

      let maxVisibleHeight = 0;
      let activeLinkId = '';

      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          activeLinkId = section.id;
        }
      });

      // Vérification supplémentaire pour activer le lien "Accueil" (#top-page)
      const pageOffset = window.pageYOffset;
      if (pageOffset < 100 && activeLinkId !== '#top-page') {
        activeLinkId = '#top-page';
      }

      setActiveLink(activeLinkId);
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
