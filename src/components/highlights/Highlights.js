import React, {Fragment} from 'react';
import './highlights.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide } from '@fortawesome/free-solid-svg-icons';
import Bruchetta from '../../assets/bruchetta.svg';
import GreekSalad from '../../assets/greek salad.jpg';
import LemonDessert from '../../assets/lemon dessert.jpg';

const Highlights = () => {

    const navigate = useNavigate();

    return(
        <div className="highlightsContainer">
            <div className="specialsHeader">
                <h2> This Weeks Specials! </h2>
                <button className="menuButton" onClick={e => navigate("/menu")}>Online Menu</button>
            </div>
             <div className="specialsContainer">
                <div className="specials">
                    <img className="specialsImg" src={GreekSalad} alt="Little Lemon's Greek Salad" />
                    <div>
                        <h4>Greek Salad</h4>
                        <h3 className="price">$12.99</h3>
                        <p>The famous greek salad of cripsy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <button className="delivery">Order a delivery <FontAwesomeIcon icon={faCarSide} /></button>
                    </div>
                </div>
                <div className="specials">
                    <img className="specialsImg" src={Bruchetta} alt="Little Lemon's Bruchetta" />
                    <div>
                        <h4>Bruchetta</h4>
                        <h3 className="price">$5.99</h3>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <button className="delivery">Order a delivery <FontAwesomeIcon icon={faCarSide} /></button>
                    </div>
                </div>
                <div className="specials">
                    <img className="specialsImg" src={LemonDessert} alt="Little Lemon's Lemon Dessert"/>
                    <div>
                        <h4>Lemon Dessert</h4>
                        <h3 className="price">$5.00</h3>
                        <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button className="delivery">Order a delivery <FontAwesomeIcon icon={faCarSide} /></button>
                    </div>
                </div>
             </div>
        </div>
    )
 }

export default Highlights;