import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div id="skills"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    </div>
  );
}

export default App;
