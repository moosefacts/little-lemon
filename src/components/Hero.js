import React from 'react';
import RF from './rf.jpg';

const Hero = () => {
    const chicagoStyle = {
        fontSize: 40,
        color: "#EDEFEE",
        fontWeight: "bold"
    }

    return(
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20}}>
            <div className="welcome">
                <h1> Little Lemon</h1>
                <p style={chicagoStyle}>Chicago</p>
                <p style={chicagoStyle}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <img src={RF} className="rf" alt="Little Lemon's Food"/>
            </div>
        </div>

    )
}

export default Hero;