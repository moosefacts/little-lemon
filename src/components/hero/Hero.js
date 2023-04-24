import React from 'react';
import RF from '../../assets/rf.jpg';
import { useNavigate } from "react-router-dom";
import './hero.css';

const Hero = () => {

    const navigate = useNavigate();
    
    return(
        <div className="heroContainer">
            <div className="column1">
                <h1 className="heroHeader"> Little Lemon</h1>
                <p className="heroP1">Chicago</p>
                <p className="heroP2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, nisi sed elementum fringilla, ligula leo scelerisque ligula, 
                et fringilla tellus urna nec turpis.
                </p>
                <button className="bookButton" onClick={e => navigate("/BookingPage")}>Reserve a Table</button>
            </div>
            <div className="column2">
                <img src={RF} className="heroImg" alt="Little Lemon's Food"/>
            </div>
        </div>

    )
}

export default Hero;