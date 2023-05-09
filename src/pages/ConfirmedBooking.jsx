import React from 'react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Confirmation from '../assets/confirmation.jpg'

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
