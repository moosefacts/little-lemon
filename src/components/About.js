import React from 'react';
import RF from './rf.jpg';


const About = () => {

    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
            <div className="abt">
                <h2> Little Lemon</h2>
                <p>Chicago</p>
            </div>
            <div>
                <img src={RF} className="rf" alt="Little Lemon's Food"/>
            </div>
        </div>
    )
 }

export default About;