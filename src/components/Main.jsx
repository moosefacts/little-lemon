import React from 'react';
import Hero from "./Hero";
import Footer from "./Footer";
import Nav from "./Nav";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

const Main = () => {

    return(

    <div class="container">
        <Nav/>
        <Hero/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
    </div>
    )

}
export default Main;