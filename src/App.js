import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="top-page"></div>
      <Header />
      <main>
        <Banner />
        <Skills />
        <Projects />
        <div id="contact"></div>
      </main>
    </div>
  );
}

export default App;
