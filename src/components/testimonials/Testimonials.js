import React from 'react';
import Linda from '../../assets/linda.jpg';
import Annalise from '../../assets/annalise.jpg';
import DorothyNate from '../../assets/dorothy&nate.jpg';
import Maria from '../../assets/maria.jpg';
import Micah from '../../assets/micah.jpg';
import Pablo from '../../assets/pablo.jpg';
import PaulaRyan from '../../assets/paula&ryan.jpg';
import MarkGiselle from '../../assets/mark&giselle.jpg';
import "./testimonials.css";

export default function Testimonials (props) {

    const names = ["Mark & Giselle", "Pablo", "Paula & Ryan", "Linda", "Annalise", "Micah", "Dorothy & Nate", "Maria", "Linda"];
    const reviews = [
                  "Sit ea sumo natum aliquam. Per dolores reprehendunt id. Te error incorrupte dissentiunt per, dicat nominavi ocurreret eam ea. ",
                  "Placerat elaboraret id pri, ea has melius explicari urbanitas, ne nam soleat imperdiet conceptam. Sit eu illud labore cotidieque.",
                  "Quo bonorum delenit ea. Adhuc atqui no cum. Torquatos interesset eam et, vis et ludus tantas. In vis justo clita dissentiet, impedit iudicabit argumentum eos in.",
                  "Quo ei quot postulant gloriatur, vis vero paulo mandamus at, at solet intellegebat quo. Te malis homero appellantur quo.",
                  "Ne est omnis ignota prodesset, per an atqui deterruisset. Explicari accommodare pro eu. Nec et justo animal. Et nec saepe incorrupte",
                  "Modus commune sapientem at eam. Cu argumentum dissentias mel, principes definitionem eam te, nam dicta vidisse omnesque id",
                  "Velit liber sapientem ne eos, inani honestatis in est. Te mea perfecto recusabo, adipisci neglegentur id sea, enim summo est id. Qui fuisset deseruisse no, eu exerci posidonium sea.",
                  "Ex facer harum pri. Vis dicta vitae insolens ne. Vel dolorum lobortis hendrerit ei, ne nec maiestatis omittantur. Te legere veritus has, sumo partem detracto vix ei, te his justo commodo."
                  ];
  
    return(
        <section className="testimonialContainer">
            <h1> Testimonials </h1>
             <section className="testimonialWrapper">
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
            </section>
        </section>
    )
 }
