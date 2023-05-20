import React, { useEffect } from 'react';

const ScrollAnim = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log('test');
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  return <div>{/* Vos composants React */}</div>;
};

export default ScrollAnim;
