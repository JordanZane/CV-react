import React from 'react';
import Banner from '../Banner';
import Skills from '../Skills';
import Projects from '../Projects';

const Home = () => {
  return (
    <main>
      <Banner />
      <Skills />
      <Projects />
      <div id="contact"></div>
    </main>
  );
};

export default Home;
