import React from 'react';
import { Link } from "react-router-dom";
import './nav.css';
import Logo from '../../assets/Logo.svg';

export default function Navigation(props) {
    return(
        <menu className={`navMenu ${props.device}`}>
            {props.device === "mobile" ? (
                ""
            ) : (
                <Link to="/">
                    <img src={Logo}
                    alt="LIttle Lemon Logo"
                    className="navLogo"
                    />
                </Link>
            )}
            <Link className="hover" to="/">
                <h1>Home</h1>
            </Link>
            <Link className="hover" to="/about">
                <h1>About</h1>
            </Link>
            <a
                className="hover"
                href={require("../../assets/menu.webp")}
                target="_blank"
                rel="noreferrer">
                    <h1>Menu</h1>
                </a>
            <Link className="hover" to="/BookingPage">
                <h1>Reservations</h1>
            </Link>
            <Link className="hover" to="/order">
                <h1>Order</h1>
            </Link>
            <Link className="hover" to="/login">
                <h1>Login</h1>
            </Link>
        </menu>
        )
    };



