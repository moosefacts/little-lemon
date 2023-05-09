import React from 'react';
import RF from '../assets/rf.jpg';
import { useNavigate } from "react-router-dom";


const Hero = () => {

    const navigate = useNavigate();
    
    return(
        <div className='grid grid-cols-2 px-8 bg-little_lemon_green w-screen mt-4 mb-6 pb-8'>
            <div className='flex flex-col ml-24'>
                <h1 className='text-4xl text-little_lemon_yellow font-bold mt-3 pl-12'> Little Lemon</h1>
                <p className='text-3xl text-little_lemon_gray-light font-bold pl-12'>Chicago</p>
                <p className='text-2xl text-little_lemon_gray-light pl-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla, nisi sed elementum fringilla, ligula leo scelerisque ligula, 
                et fringilla tellus urna nec turpis.
                </p>
                <button className='button w-48 mt-3 self-center' onClick={e => navigate("/BookingPage")}>Reserve a Table</button>
            </div>
            <div className='flex flex-col mr-12'>
                <img src={RF} className='object-scale-down h-80 w-auto mt-9 ml-24 absolute rounded-lg' alt="Little Lemon's Food"/>
            </div>
        </div>

    )
}

export default Hero;