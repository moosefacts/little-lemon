import React from 'react';
import './footer.css';
import Logo from '../../assets/footer_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {return (

    <div className="footerContainer">

        <img className="footerLogo" src={Logo} alt="Little Lemon's Logo" />
            <div className="footerWrapper">
                <div className="footerColumn">

                        <h1>Navigation</h1>
                        <ul className="navLinks">
                            <li><Link className="navHover" to='/'>Home</Link></li>
                            <li><Link className="navHover" to='/about'>About</Link></li>
                            <li><Link className="navHover" to='/menu'>Menu</Link></li>
                            <li><Link className="navHover" to='/reservations'>Reservations</Link></li>
                            <li><Link className="navHover" to='/orderonline'>Order Online</Link></li>
                            <li><Link className="navHover" to='/login'>Login</Link></li>
                        </ul>

                </div>
                <div className="footerColumn">

                        <h1>Contact Details</h1>
                        <ul className="contactDetails">
                            <li>Phone Number: <br></br>555-971-4378</li>
                            <li>Email: <br></br> LittleLemon@Comcast.net</li>
                            <li>Address:<br></br> 440 SE Westworld Drive <br></br>
                                 Chicago, IL 60607 </li>
                        </ul>

                </div>
                <div className="footerColumn">
                    <h1>Social Media Links</h1>
                        <ul className="smLinks">
                            <li>
                                <Link className="navHoverSM" to='/'>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" color="#EDEFEE" />
                                </Link>
                            </li>
                            <li>
                                <Link className="navHoverSM" to='/'>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#EDEFEE" />
                                </Link>
                            </li>
                            <li>
                                <Link className="navHoverSM" to='/'>
                                    <FontAwesomeIcon icon={faTwitter} size="2x" color="#EDEFEE" />
                                </Link>
                            </li>
                            <li>
                                <Link className="navHoverSM" to='/'>
                                    <FontAwesomeIcon icon={faPinterest} size="2x" color="#EDEFEE" />
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
    </div>
    )
}

export default Footer;
