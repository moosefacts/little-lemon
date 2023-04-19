import React from 'react';

import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import Highlights from "./highlights/Highlights";
import Testimonials from "./testimonials/Testimonials";
import About from "./about/About";

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
