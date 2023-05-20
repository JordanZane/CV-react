import React from 'react';
import CvPdf from '../../assets/files/cv-zanetti-jordan.pdf';

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
              <a href={CvPdf} download className="btn-style">
                Mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
