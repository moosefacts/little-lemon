import React, {Fragment} from 'react';

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import Bruchetta from '../assets/bruchetta.svg';
import GreekSalad from '../assets/greek salad.jpg';
import LemonDessert from '../assets/lemon dessert.jpg';

const Highlights = () => {

    const navigate = useNavigate();

    return(
        <div className='w-screen pt-11'>
            <div className='grid grid-cols-2 text-3xl text-center '>
                <h1 className='font-bold text-2xl pl-24'> This Weeks Specials! </h1>
                <button className='button w-48' onClick={e => navigate("/menu")}>Online Menu</button>
            </div>
             <section className='grid grid-cols-3 place-content-center mx-64 mt-6'>
                    <div className='flex flex-col bg-little_lemon_gray-light rounded-t-xl'>
                        <img className='object-cover h-48 rounded-t-xl' src={GreekSalad} alt="Little Lemon's Greek Salad" />
                            <h2 className='font-bold text-lg ml-3'>Greek Salad</h2>
                            <h3 className='text-red-600 ml-3'>$12.99</h3>
                            <p className='mx-3 mb-3'> The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <button className='mx-12 mb-3 hover:bg-little_lemon_yellow rounded-lg p-3'>Order a delivery <FontAwesomeIcon icon={faCarSide} /></button>
                    </div>
                    <div className='flex flex-col bg-little_lemon_gray-light rounded-t-xl mx-3'>
                        <img className='object-cover h-48 rounded-t-xl' src={Bruchetta} alt="Little Lemon's Bruchetta" />
                            <h2 className='font-bold text-lg ml-3'>Bruchetta</h2>
                            <h3 className='text-red-600 ml-3'>$5.99</h3>
                            <p className='mx-3 mb-3'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <button className='mx-12 mb-3 hover:bg-little_lemon_yellow rounded-lg p-3'>Order a delivery <FontAwesomeIcon icon={faCarSide} /></button>
                    </div>
                    <div className='flex flex-col bg-little_lemon_gray-light rounded-t-xl'>
                        <img className='object-cover h-48 rounded-t-xl' src={LemonDessert} alt="Little Lemon's Lemon Dessert"/>
                            <h2 className='font-bold text-lg ml-3'>Lemon Dessert</h2>
                            <h3 className='text-red-600 ml-3'>$5.00</h3>
                            <p className='mx-3 mb-3'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <button className='mx-12 mb-3 hover:bg-little_lemon_yellow rounded-lg p-3'>Order a delivery <FontAwesomeIcon icon={faCarSide} /></button>
                    </div>
                </section>
             </div>
    )
 }

export default Highlights;