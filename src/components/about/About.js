import React from 'react';
import Chef from '../../assets/restaurant chef B.jpg';
import Food from '../../assets/Mario and Adrian b.jpg';
import Medfeast from '../../assets/medfeast.jpg';
import "./about.css"



const About = () => {

    return(
        <article className="aboutContainer">
            <section className="aboutHeader">
                <h1> Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="aboutText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                     nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                     nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                     deserunt mollit anim id est laborum.
                     <br>
                     </br>
                     <br>
                     </br>
                     "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                     totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                     dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                     sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
                     qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                     incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                     exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem 
                     vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum 
                     qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
                </section>
            <section className="aboutImages">
                <img src={Medfeast} className="image1" alt="Little Lemon's Food"/>
                <img src={Chef} className="image2" alt="Little Lemon's Food"/>
            </section>
        </article>
    )
 }

export default About;