import React from 'react';
import BookingForm from './BookingForm'
import Footer from "./footer/Footer";
import Nav from "./nav/Nav";
import { useReducer } from 'react';
import submitAPI from "./bookingAPI";
import '../App.css';


export default function BookingPage () {

    function updateTimes(date: any) {
        return fetchAPI(date);
    }



    const [availableTimes, dispatch] = useReducer(updateTimes, );

    console.log(updateTimes)
    return(
        <div>
            <Nav />
            <BookingForm availabletimes={availableTimes} updateTimes={dispatch}/>
            <Footer />
            <div>{}</div>
        </div>
        )
 }
