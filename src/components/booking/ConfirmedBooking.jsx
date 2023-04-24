import React from 'react';
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import './bookingForm.css';
import Confirmation from '../../assets/confirmation.jpg'

const ConfirmedBooking = () => {
  return (
    <div>
      <Nav />
        <img className="backgroundImage" src={Confirmation} alt="" />
          <section className="resMessage">
            <h1>Your Reservation is Confirmed!</h1>
          </section>
      <Footer />
    </div>
  )
}

export default ConfirmedBooking
