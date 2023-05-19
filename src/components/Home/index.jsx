import React from 'react';
import Banner from '../Banner';
import Skills from '../Skills';
import Projects from '../Projects';
import Navigation from '../Navigation';
import Header from '../Header';

const Home = () => {
  return (
    <main>
      <div id="top-page"></div>
      <Navigation />
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <div id="contact"></div>
    </main>
  );
};

export default Home;
