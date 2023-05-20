import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-container">
              <h2>Contact</h2>
              <div className="row">
                <div className="offset-lg-3 col-lg-2 col-sm-12">
                  <div className="contact-content">
                    <a href="tel:0666179121">
                      {' '}
                      <i className="fa-solid fa-phone"></i>
                      06.66.17.91.21
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="contact-content">
                    <a href="mailto:jzanetti1@outlook.fr">
                      <i className="fa-sharp fa-solid fa-envelope"></i>{' '}
                      jzanetti1@outlook.fr
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-12">
                  <div className="contact-content">
                    <a
                      href="https://www.linkedin.com/in/jordan-zanetti-044ab2174/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i> Profil
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
