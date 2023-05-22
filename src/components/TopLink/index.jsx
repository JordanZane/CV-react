import React from 'react';

const TopLink = () => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const projectsSection = document.getElementById('top-page');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="top-page-link-container">
      <a onClick={handleLinkClick} href="#top-page">
        <i className="fa-sharp fa-solid fa-chevron-up"></i>{' '}
      </a>
    </div>
  );
};

export default TopLink;
