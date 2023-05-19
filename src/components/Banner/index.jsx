import React from 'react';

const Banner = () => {
  return (
    <div className="container-fluid banner-section section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-content">
              <p>
                Je suis un développeur web déterminé <br />
                ayant une grande soif d'apprendre
              </p>
              <a href="#projects" className="btn-style">
                Mes projets
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
