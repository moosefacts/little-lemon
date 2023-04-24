import React from 'react';
import {useNavigate } from 'react-router-dom';
import Hero from "./hero/Hero";
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import Highlights from "./highlights/Highlights";
import Testimonials from "./testimonials/Testimonials";
import About from "./about/About";

const Main = () => {

    const navigate = useNavigate();
    
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