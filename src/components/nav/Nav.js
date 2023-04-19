import React from 'react';
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import './nav.css';
import Logo from '../../assets/Logo.svg';
import Hamburger from '../../assets/hamburger.png';
import X from '../../assets/X.png';
import { useState } from 'react';

export default function Nav () {

    const [navOpen, setNavOpen] = useState(false);
    function handleToggle() {
        setNavOpen(!navOpen);
    }

    return(
        <nav>
            <nav className="closed">
                <img
                    src={require("../../assets/Logo.svg")}
                    alt="Little Lemon Logo"
                    className="navLogo"
                />
            <button className="menu" onClick={handleToggle}>
                <img src={navOpen ? X : Hamburger} />
            </button>
            </nav>
            <Navigation device="desktop" />
            {navOpen ? <Navigation device="mobile" /> : "" }
        </nav>
     );
 }
