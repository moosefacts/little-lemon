import React from 'react';
import Logo from './Logo.svg';

const Footer = () => {return (

             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20}}>
                <div className="ftr">
                    <img src={Logo} alt="Little Lemon's Logo" />
                </div>
                <div className="ftr">
                    <div>
                        <h5>Navigation</h5>
                        <p>asdasdas</p>
                    </div>
                </div>
                <div className="ftr">
                    <div>
                        <h5>Contact Details</h5>
                        <p>abc</p>
                    </div>
                </div>
                <div className="ftr">
                    <div>
                        <h5>Social Media Links</h5>
                        <p>Abc</p>
                    </div>
                </div>
             </div>
    )
}

export default Footer;
