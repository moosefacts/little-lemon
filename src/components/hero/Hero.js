import React from 'react';
import RF from '../../assets/rf.jpg';
import { useNavigate } from "react-router-dom";
import './hero.css';

const Hero = () => {

    const navigate = useNavigate();
    
    return(
        <div className="heroContainer">
            <div>
                <h1 className="heroHeader"> Little Lemon</h1>
                <p className="heroP1">Chicago</p>
                <p className="heroP2">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="bookButton" onClick={e => navigate("/BookingPage")}>Reserve a Table</button>
            </div>
            <div>
                <img src={RF} className="heroImg" alt="Little Lemon's Food"/>
            </div>
        </div>

    )
}

export default Hero;