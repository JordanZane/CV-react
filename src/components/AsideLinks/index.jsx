import React from 'react';
const AsideLinks = () => {
  return (
    <aside>
      <ul className="links-container">
        <li>
          <a href="tel:0666179121">
            <i className="fa-solid fa-phone"></i>
          </a>
        </li>
        <li>
          <a href="mailto:jzanetti1@outlook.fr">
            <i className="fa-sharp fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jordan-zanetti-044ab2174/"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/JordanZane"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default AsideLinks;
