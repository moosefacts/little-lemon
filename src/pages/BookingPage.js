import React from 'react';
import BookingForm from '../components/BookingForm'
import Nav from "../components/Nav";
import { useState, useReducer, useEffect } from 'react';
import { fetchAPI } from "../components/booking/bookingAPI";



export default function BookingPage () {

   const initializeTimes = [
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ]
      function updateTimes(date) {
      }

    const [availableTimes, setAvailableTimes] = useState(initializeTimes, updateTimes());

    return(
        <div>
            <Nav />
            <BookingForm availableTimes={availableTimes} />
        </div>
        )
 }

