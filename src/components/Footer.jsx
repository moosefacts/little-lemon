import React from 'react';
import Logo from '../assets/footer_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (

    <div className='grid grid-cols-4 w-screen'>
        <img className='h-48 w-auto ml-24' src={Logo} alt="Little Lemon's Logo" />
        <div className=' grid justify-center text-little_lemon_gray mr-40'>
            <h1 className='font-bold text-xl'>Navigation</h1>
            <ul>
                            <li className='hover:text-little_lemon_yellow'><Link className="navHover" to='/'>Home</Link></li>
                            <li className='hover:text-little_lemon_yellow'><Link className="navHover" to='/about'>About</Link></li>
                            <li className='hover:text-little_lemon_yellow'><Link className="navHover" to='/menu'>Menu</Link></li>
                            <li className='hover:text-little_lemon_yellow'><Link className="navHover" to='/reservations'>Reservations</Link></li>
                            <li className='hover:text-little_lemon_yellow'><Link className="navHover" to='/orderonline'>Order Online</Link></li>
                            <li className='hover:text-little_lemon_yellow'><Link className="navHover" to='/login'>Login</Link></li>
                        </ul>

        </div>
                <div className='text-little_lemon_gray'>
                        <h1  className='font-bold text-xl'>Contact Details</h1>
                        <ul className='text-sm'>
                            <li>Phone Number: <br></br>555-971-4378</li>
                            <li>Email: <br></br> LittleLemon@Comcast.net</li>
                            <li>Address:<br></br> 440 SE Westworld Drive <br></br>
                                 Chicago, IL 60607 </li>
                        </ul>

                </div>
                <div className='grid justify-center text-little_lemon_gray mr-36'>
                    <h1 className='font-bold text-xl'>Social Media Links</h1>
                        <ul className='grid justify-center'>
                            <li className='hover:text-little_lemon_yellow'>
                                <Link to='/'>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" color="333333" />
                                </Link>
                            </li>
                            <li className='hover:text-little_lemon_yellow'>
                                <Link to='/'>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" color="#333333" />
                                </Link>
                            </li>
                            <li className='hover:text-little_lemon_yellow'>
                                <Link to='/'>
                                    <FontAwesomeIcon icon={faTwitter} size="2x" color="#333333" />
                                </Link>
                            </li>
                            <li className='hover:text-little_lemon_yellow'>
                                <Link to='/'>
                                    <FontAwesomeIcon icon={faPinterest} size="2x" color="#333333" />
                                </Link>
                            </li>
                        </ul>
                </div>

    </div>
    )
}

export default Footer;
