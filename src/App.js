import React from "react";
import "./App.css";
import Nav from '../src/components/Nav';
import Hero from '../src/components/Hero';
import BioMain from '../src/components/BioMain';
import Footer from "./components/Footer";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Nav />
        <Hero />
        <BioMain />
        <Work />
      </div>
    </div>
  )
}

export default App;
