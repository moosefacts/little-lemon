import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.svg';

export default function Navigation(props) {
    return(
        <menu className='grid grid-cols-7 mt-3 pr-12 pb-1 justify-between text-center w-screen'>
            <Link to="/">
                    <img src={Logo}
                    alt="LIttle Lemon Logo"
                    className='px-5 w-72'
                    />
            </Link>
            <Link className='text-3xl text-little_lemon_gray hover:bg-little_lemon_yellow' to="/">
                <h1>Home</h1>
            </Link>
            <Link className='text-3xl text-little_lemon_gray hover:bg-little_lemon_yellow' to="/about">
                <h1>About</h1>
            </Link>
            <Link className='text-3xl text-little_lemon_gray hover:bg-little_lemon_yellow' to="/Menu">
                <h1>Menu</h1>
            </Link>
            <Link className='text-3xl text-little_lemon_gray hover:bg-little_lemon_yellow' to="/BookingPage">
                <h1>Reservations</h1>
            </Link>
            <Link className='text-3xl text-little_lemon_gray hover:bg-little_lemon_yellow' to="/order">
                <h1>Order</h1>
            </Link>
            <Link className='text-3xl text-little_lemon_gray hover:bg-little_lemon_yellow' to="/login" >
                <h1 >Login</h1>
            </Link>
        </menu>
        )
    };



/* 
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
            */