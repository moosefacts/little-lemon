import React from 'react';
import "./testimonials.css";
import Linda from '../../assets/linda.jpg';
import Annalise from '../../assets/annalise.jpg';
import DorothyNate from '../../assets/dorothy&nate.jpg';
import Maria from '../../assets/maria.jpg';
import Micah from '../../assets/micah.jpg';
import Pablo from '../../assets/pablo.jpg';
import PaulaRyan from '../../assets/paula&ryan.jpg';
import MarkGiselle from '../../assets/mark&giselle.jpg';

export default function TestimonialCard(props) {

    const data = [
        { _id: 1, name:"Micheal Caldwell", review:"This is the best Mediterranean food that I've ever had!", image:{MarkGiselle} },
        { _id: 2, name:"Alan Chen", review:"My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",  image:{Pablo} },
        { _id: 3, name:"Casey Lau", review:"I've had some great Mediterranean food before, but none of them beatsLittle Lemon in flavor and texture.",  image:{PaulaRyan} },
        { _id: 4, name:"John Rosenblum", review:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",  image:{Annalise} },
        { _id: 5, name:"Jim Reynor", review:"The food here really refreshed me after a late night shift at the local supply depot.",  image:{Micah} },
        { _id: 6, name:"Brian Dean", review:"I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.",  image:{DorothyNate} },
        { _id: 7, name:"Tyler Tohmine", review:"The food here was fire!! Everyone should try this place out at least once if they live in Chicago.", image:{Maria}},
        { _id: 8, name:"Jack Hu", review:"This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!", image:{Linda} }
      ];
      
    return (
        <div className="testimonialCards">
            <div className="testimonialCard">

                <h2>{props.names}</h2>
                <img src={props.images} alt=""></img>
                <h3>{props.reviews}</h3>

            </div>
        </div>
    );
}

