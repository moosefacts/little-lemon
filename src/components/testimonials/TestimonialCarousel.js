import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard"
import Linda from '../../assets/linda.jpg';
import Annalise from '../../assets/annalise.jpg';
import DorothyNate from '../../assets/dorothy&nate.jpg';
import Maria from '../../assets/maria.jpg';
import Micah from '../../assets/micah.jpg';
import Pablo from '../../assets/pablo.jpg';
import PaulaRyan from '../../assets/paula&ryan.jpg';
import MarkGiselle from '../../assets/mark&giselle.jpg';
import "./testimonials.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




    const TestimonialCarousel = (props) => {
        

        const data = [
            { _id: 1, name:"Micheal Caldwell", review:"This is the best Mediterranean food that I've ever had!", image:"../../assets/mark&giselle.jpg" },
            { _id: 2, name:"Alan Chen", review:"My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",  image:{Pablo} },
            { _id: 3, name:"Casey Lau", review:"I've had some great Mediterranean food before, but none of them beatsLittle Lemon in flavor and texture.",  image:{PaulaRyan} },
            { _id: 4, name:"John Rosenblum", review:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",  image:{Annalise} },
            { _id: 5, name:"Jim Reynor", review:"The food here really refreshed me after a late night shift at the local supply depot.",  image:{Micah} },
            { _id: 6, name:"Brian Dean", review:"I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.",  image:{DorothyNate} },
            { _id: 7, name:"Tyler Tohmine", review:"The food here was fire!! Everyone should try this place out at least once if they live in Chicago.", image:{Maria}},
            { _id: 8, name:"Jack Hu", review:"This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!", image:{Linda} }
          ];

          const names = ["Mark & Giselle", "Pablo", "Paula & Ryan", "Linda", "Annalise", "Micah", "Dorothy & Nate", "Maria", "Linda"];
          const reviews = [
                        "Sit ea sumo natum aliquam. Per dolores reprehendunt id. Te error incorrupte dissentiunt per, dicat nominavi ocurreret eam ea. ",
                        "Eos labore habemus invidunt an. Ut nec nulla partiendo. Placerat elaboraret id pri, ea has melius explicari urbanitas, ne nam soleat imperdiet conceptam. Sit eu illud labore cotidieque.",
                        "Quo bonorum delenit ea. Adhuc atqui no cum. Torquatos interesset eam et, vis et ludus tantas. In vis justo clita dissentiet, impedit iudicabit argumentum eos in.",
                        "Quo ei quot postulant gloriatur, vis vero paulo mandamus at, at solet intellegebat quo. Te malis homero appellantur quo.",
                        "Ne est omnis ignota prodesset, per an atqui deterruisset. Explicari accommodare pro eu. Nec et justo animal. Et nec saepe incorrupte",
                        "Modus commune sapientem at eam. Cu argumentum dissentias mel, principes definitionem eam te, nam dicta vidisse omnesque id",
                        "Velit liber sapientem ne eos, inani honestatis in est. Te mea perfecto recusabo, adipisci neglegentur id sea, enim summo est id. Qui fuisset deseruisse no, eu exerci posidonium sea.",
                        "Ex facer harum pri. Vis dicta vitae insolens ne. Vel dolorum lobortis hendrerit ei, ne nec maiestatis omittantur. Te legere veritus has, sumo partem detracto vix ei, te his justo commodo."
                        ];
        

                        const responsive = {
                            desktop: {
                              breakpoint: { max: 3000, min: 1024 },
                              items: 3,
                              slidesToSlide: 3 // optional, default to 1.
                            },
                            tablet: {
                              breakpoint: { max: 1024, min: 464 },
                              items: 2,
                              slidesToSlide: 2 // optional, default to 1.
                            },
                            mobile: {
                              breakpoint: { max: 464, min: 0 },
                              items: 1,
                              slidesToSlide: 1 // optional, default to 1.
                            }
                          };


        return (

            <div className="carouselContainer">
                <div className="carouselWrapper">
                    <Carousel responsive={responsive}>
                        <div className="testimonialCard"> 
                            <h2>{names[0]}</h2>
                            <img src={MarkGiselle} alt=""/>
                            <h3>{reviews[0]}</h3>
                        </div>
                        <div className="testimonialCard"> 
                            <h2>{names[1]}</h2>
                            <img src={Pablo} alt=""/>
                            <h3>{reviews[1]}</h3>
                        </div>
                        <div className="testimonialCard"> 
                            <h2>{names[2]}</h2>
                            <img src={PaulaRyan} alt=""/>
                            <h3>{reviews[2]}</h3>
                        </div>
                        <div className="testimonialCard"> 
                            <h2>{names[3]}</h2>
                            <img src={Linda} alt=""/>
                            <h3>{reviews[3]}</h3>
                        </div>
                        <div className="testimonialCard"> 
                            <h2>{names[4]}</h2>
                            <img src={Annalise} alt=""/>
                            <h3>{reviews[4]}</h3>
                        </div>
                        <div className="testimonialCard"> 
                            <h2>{names[5]}</h2>
                            <img src={Micah} alt=""/>
                            <h3>{reviews[5]}</h3>
                        </div>
                        <div className="testimonialCard"> 
                            <h2>{names[6]}</h2>
                            <img src={DorothyNate} alt=""/>
                            <h3>{reviews[6]}</h3>
                        </div>
                        <div className="testimonialCard"> 
                            <h2>{names[7]}</h2>
                            <img src={Maria} alt=""/>
                            <h3>{reviews[7]}</h3>
                        </div>
                        </Carousel>
                <div>Ab</div>
                </div>
        </div>
        )
        }
export default TestimonialCarousel


