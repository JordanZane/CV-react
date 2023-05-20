import React from 'react';
import Banner from '../Banner';
import Skills from '../Skills';
import Projects from '../Projects';
import Navigation from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';
import AsideLinks from '../AsideLinks';
import TopLink from '../TopLink';

const Home = () => {
  return (
    <main>
      <Navigation />
      <AsideLinks />
      <TopLink />
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
