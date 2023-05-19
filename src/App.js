import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
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
