import React from 'react';

import Logo from './Logo.svg';

const Nav = () => {
    return(
    <div>
        <ul>
            <li><img src={Logo} className="logo" alt="Logo" /></li>
            <li><a href="./"><h3>Home</h3></a></li>
            <li><h3>About</h3></li>
            <li><h3>Menu</h3></li>
            <li><a href="./BookingPage"><h3>Reservations</h3></a></li>
            <li><h3>Order Online</h3></li>
            <li><h3>Login</h3></li>
        </ul>

    </div>

     )
 }

export default Nav;