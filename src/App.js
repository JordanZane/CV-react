import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="top-page"></div>
      <Header />
      <main>
        <Banner />
        <Skills />
        <div id="projects"></div>
        <div id="contact"></div>
      </main>
    </div>
  );
}

export default App;
