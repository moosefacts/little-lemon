import React from 'react';
import BookingForm from './BookingForm'
import Footer from "./Footer";
import Nav from "./Nav";
import { useReducer } from 'react';

const BookingPage = () => {

    return(
        <div>
            <Nav />
            <BookingForm />
            <Footer />
        </div>

    )
 }

export default BookingPage;