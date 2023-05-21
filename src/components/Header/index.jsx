import React from 'react';

const Header = () => {
  return (
    <header id="top-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="header-content">
              <h1 className="hidden">
                Zanetti Jordan <br />
                <span>Développeur web front-end</span>
              </h1>
              <div className="btn-container hidden">
                <a className="btn-style " href="#contact">
                  Contactez moi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
