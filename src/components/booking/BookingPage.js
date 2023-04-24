import React from 'react';
import BookingForm from './BookingForm'
import Nav from "../nav/Nav";
import { useState, useReducer, useEffect } from 'react';
import { fetchAPI } from "./bookingAPI";
import './bookingForm.css';



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

