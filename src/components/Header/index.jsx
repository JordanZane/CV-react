import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Navigation />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1>
              Zanetti Jordan <br />
              <span>Développeur web front-end</span>
            </h1>
            <a className="btn-style" href="#contact">
              Contactez moi
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
