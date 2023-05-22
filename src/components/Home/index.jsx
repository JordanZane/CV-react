import React from 'react';
import Banner from '../Banner';
import Skills from '../Skills';
import Projects from '../Projects';
import Navigation from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';
import AsideLinks from '../AsideLinks';
import ScrollAnim from '../ScrollAnim/scrollanim';
import TopLink from '../TopLink';

const Home = () => {
  return (
    <main>
      <ScrollAnim />
      <Navigation />
      <TopLink />
      <AsideLinks />
      <Header />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;
