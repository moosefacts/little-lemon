import React from 'react';

import Hero from "./Hero";
import Footer from "./Footer";
import Nav from "./Nav";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

const Home = () => {
  return (
    <div class="container">
      <div className="Nav">
        <Nav/>
      </div>
        <div className="Hero">
          <Hero/>
        </div>
        <div className="Highlights">
          <Highlights/>
        </div>
        <div className="Testimonials">
          <Testimonials/>
        </div>
        <div className="About">
          <About/>
        </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
