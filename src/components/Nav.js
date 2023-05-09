import React from 'react';
import Navigation from "./Navigation";
import Logo from '../assets/Logo.svg';
import Hamburger from '../assets/hamburger.png';
import X from '../assets/X.png';
import { useState } from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

export default function Nav () {

    const [navOpen, setNavOpen] = useState(false);
    function handleToggle() {
        setNavOpen(!navOpen);
    }

    return(
        <nav>
            <nav className="closed">
                <img
                    src={Logo}
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
