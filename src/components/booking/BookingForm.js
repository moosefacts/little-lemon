import React from 'react';
import './bookingForm.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import submitAPI from "./bookingAPI";


export default function BookingForm(props) {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [occasion, setOccasion] = useState("");
    const [comments, setComments] = useState("");

    const [selectedTime, setSelectedTime] = useState(
      props.availableTimes.map((times) => <option>{times}</option>)
    );

    function handleDateChange(e) {
      setDate(e.target.value);
    };

    function handleTimeChange (e) {
      (props.availableTimes.map((times) => <option>{times}</option>)), setTime(e.target.value)
    };

  
    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
          firstName,
          lastName,
          email,
          date,
          time,
          guests,
          occasion,
          comments,
        };

        navigate('/confirmation')
      };

return(
    <div className="bookingForm">
        <h1>Schedule Your Reservation</h1>
            <form onSubmit={handleSubmit}>
                <label className="formLabel" for="firstName">First Name</label>
                <input className="formField"
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="Please enter your first name"
                        required={true}
                        minLength="2"
                        maxLength="50"
                        onChange={(e)=>setFirstName}
                        />
                <label className="formLabel" for="lastName">Last Name</label>
                <input  className="formField"
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Please enter your last name"
                        required={true}
                        minLength="2"
                        maxLength="50"
                        onChange={(e)=>setLastName}
                        />
                <label className="formLabel" for="email">Email</label>
                <input className="formField"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please enter your email address"
                        minLength="2"
                        maxLength="50"
                        onChange={(e)=>setEmail}
                        required={true}
                        />
                <label className="formLabel" for="resdate">Select a Date</label>
                <input className="formField" 
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    required={true}
                    >
                </input>
                <label className="formLabel" for="lastName">Select Time</label>
                <select className="formField"
                        name="time"
                        id="time"
                        htmlFor="time"
                        value={time}
                        style={{ display: "block" }}
                        placeholder="Select a time" 
                        onChange={handleTimeChange}
                        >
                        {selectedTime}
                </select>
                <label className="formLabel" for="guests">Number of Guests</label>
                    <input className="formField"
                     type="number" 
                     placeholder="1" 
                     min="1" 
                     max="10" 
                     id="guests" 
                     value={guests} 
                     onChange={(e)=> setGuests(e.target.value)} 
                     required={true}
                     >
                     </input>
                <label className="formLabel" for="occasion">Occasion</label>
                <select className="formField"
                        id="occasion" 
                        value={occasion} 
                        onChange={(e)=>setOccasion(e.target.value)}>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                            <option>Engagement</option>
                            <option>Other</option>
                </select>
                <label className="formLabel" htmlFor="comments">Additional Comments</label> <br></br>
                    <textarea
                        className="commentField"
                        id="comments"
                        rows={8}
                        cols={50}
                        placeholder="Additional Comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></textarea>
                <button className="formButton" type="submit" value="Submit" onSubmit={handleSubmit} aria-label="On Click" >
                Submit
              </button>
            </form>
      </div>
        )
}
