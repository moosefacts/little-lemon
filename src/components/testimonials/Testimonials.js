import React from 'react';
import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialCard from "./TestimonialCard";
import Linda from '../../assets/linda.jpg';
import Annalise from '../../assets/annalise.jpg';
import DorothyNate from '../../assets/dorothy&nate.jpg';
import Maria from '../../assets/maria.jpg';
import Micah from '../../assets/micah.jpg';
import Pablo from '../../assets/pablo.jpg';
import PaulaRyan from '../../assets/paula&ryan.jpg';
import MarkGiselle from '../../assets/mark&giselle.jpg';
import "./testimonials.css";



export default function Testimonials () {

    return(
        <section className="testimonialContainer">
            <h1> Testimonials </h1>
             <section className="testimonialCarousel">
                <TestimonialCarousel show={3} infiniteLoop={true}>

                </TestimonialCarousel>
            </section>
        </section>
    )
 }
