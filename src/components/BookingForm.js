import React from 'react';
import './bookingForm.css';
import { useState, useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import Main from "./Main";
import submitAPI from "./bookingAPI";



export default function BookingForm(props) {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [occasion, setOccasion] = useState("");

const availableTimes = [
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
    ];

    const [finalTime, setFinalTime] = useState(
      availableTimes.map((times) => <option>{times}</option>)
    );

    const navigate = useNavigate();

    function handleDateChange(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        
        const date = new Date(stringify);

        props.updateTimes(date);

        setFinalTime(availableTimes.map((times) => <option>{times}</option>));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
          fName,
          date,
          finalTime,
          people,
          occasion,
        };
        console.log(formData);
        if (submitAPI(formData) === true) {
          navigate('/confirmation');
        }
      };

    return(
        <form className="bookingForm" onSubmit={handleSubmit}>
            <label for="resname">Name</label>
                <input
                type="text"
                id="resname"
                value={fName}
                placeholder="Your name"
                required minLength="2"
                maxLength="50"
                onChange = {(e) => setFName(e.target.value)}
                ></input>
            <label for="resdate">Choose date</label>
                <input type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
                ></input>
            <label htmlFor="time">Choose time</label>
                <select id="time"
                required>
                    {finalTime}
                </select>
            <label for="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="people" value={people} onChange={(e)=> setPeople(e.target.value)} required></input>
            <label for="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e)=>setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            <input className="formButton" type="submit" value="Make Your Reservation" onSubmit={e => this.handleSubmit(e, ()=>navigate("/Confirmation"))} aria-label="On Click" ></input>
                </form>
        )
}