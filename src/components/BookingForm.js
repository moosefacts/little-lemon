import React from 'react';
import { useState, useReducer } from 'react';
import Main from "./Main";

function BookingForm() {

    const [resInfo, setResInfo] = useState({
        resdate: "",
        resname: "",
        restime: "",
        guests: "",
        occasion: "",
    });

    const [initializeTimes, setInitializeTimes] = useState([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ]);

    const [availableTimes] = useReducer(initializeTimes, setInitializeTimes);

    const handleChange = (e) => {
        setResInfo({ resInfo, [e.target.name]: e.target.value })
        console.log(resInfo)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return(
        <form className="Form" onSubmit={handleSubmit}>
                    <label for="resdate">Choose date</label>
                        <input type="date" id="resdate" value={resInfo.resdate} onChange={handleChange}></input>
                        <label for="restime">Choose time</label>
                        <select id="restime" value={resInfo.restime} onChange={handleChange}>
                            <option value="5pm">{availableTimes[0]}</option>
                            <option value="6pm">{availableTimes[1]}</option>
                            <option value="7pm">{availableTimes[2]}</option>
                            <option value="8pm">{availableTimes[3]}</option>
                            <option value="9pm">{availableTimes[4]}</option>
                            <option value="10pm">{availableTimes[5]}</option>
                        </select>
                        <label for="guests">Number of guests</label>
                        <input type="number" placeholder="1" min="1" max="10" id="guests" value={resInfo.guests} onChange={handleChange}></input>
                        <label for="occasion">Occasion</label>
                        <select id="occasion" value={resInfo.occasion} onChange={handleChange}>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                        <input type="submit" value="Make Your reservation" onSubmit={handleSubmit}></input>
                </form>
        )
}

export default BookingForm;