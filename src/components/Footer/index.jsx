import React from 'react';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-container">
              <h2 className="hidden">Contact</h2>
              <div className="row icons-container">
                <div className="offset-sm-3 col-sm-2">
                  <div className="contact-content hidden">
                    <a href="tel:0666179121">
                      {' '}
                      <i className="fa-solid fa-phone"></i>
                      <span>06.66.17.91.21</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="contact-content hidden">
                    <a href="mailto:jzanetti1@outlook.fr">
                      <i className="fa-sharp fa-solid fa-envelope"></i>{' '}
                      <span>jzanetti1@outlook.fr</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="contact-content hidden">
                    <a
                      href="https://www.linkedin.com/in/jordan-zanetti-044ab2174/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                      <span> Profil LinkedIn</span>
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
