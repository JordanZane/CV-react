import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-content">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:0666179121">06.66.17.91.21</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-content">
              <i className="fa-sharp fa-solid fa-envelope"></i>{' '}
              <a href="mailto:jzanetti1@outlook.fr">jzanetti1@outlook.fr</a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-content">
              <i className="fa-brands fa-linkedin-in"></i>{' '}
              <a
                href="https://www.linkedin.com/in/jordan-zanetti-044ab2174/"
                target="_blank"
                rel="noreferrer"
              >
                Profil LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
