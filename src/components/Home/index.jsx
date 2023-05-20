import React from 'react';
import Banner from '../Banner';
import Skills from '../Skills';
import Projects from '../Projects';
import Navigation from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';

const Home = () => {
  return (
    <main>
      <div id="top-page"></div>
      <Navigation />
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
