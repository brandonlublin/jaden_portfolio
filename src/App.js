import React from "react";
import "./App.css";
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import BioMain from '../src/components/BioMain';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <BioMain />
    </div>
  )
}

export default App;
