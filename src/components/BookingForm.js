import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import submitAPI from "./booking/bookingAPI";


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
    <div className='w-screen max-w-4xl mx-auto bg-little_lemon_green rounded-2xl text-little_lemon_gray-light text-lg text-bold justify-center p-5 pt-8'>
        <h1 className='text-center text-2xl text-bold'>Schedule Your Reservation</h1>
            <form onSubmit={handleSubmit} className='w-full'>
              <div className='flex flex-wrap -mx-3 mb-6 mt-5'>
                <div className="w-full md:w-1/2 pr-5 mb-6 md:mb-0">
                  <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' 
                    for="firstName">First Name</label>
                  <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Please enter your first name"
                          required={true}
                          minLength="2"
                          maxLength="50"
                          onChange={(e)=>setFirstName}
                          />
                </div>
                <div className="w-full md:w-1/2">
                  <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' 
                    for="lastName">Last Name</label>
                  <input  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Please enter your last name"
                          required={true}
                          minLength="2"
                          maxLength="50"
                          onChange={(e)=>setLastName}
                          />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' 
                  for="email">Email</label>
                <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please enter your email address"
                        minLength="2"
                        maxLength="50"
                        onChange={(e)=>setEmail}
                        required={true}
                        />
                </div>
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' for="resdate">Select a Date</label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        type="date"
                        id="date"
                        value={date}
                        onChange={handleDateChange}
                        required={true}
                        >
                    </input>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' for="lastName">Select Time</label>
                    <div class="relative">
                      <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
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
                    </div>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' for="guests">Number of Guests</label>
                        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
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
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' for="occasion">Occasion</label>
                    <select className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                            id="occasion" 
                            value={occasion} 
                            onChange={(e)=>setOccasion(e.target.value)}>
                                <option>None</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Engagement</option>
                                <option>Other</option>
                    </select>
                  </div>
                </div>
                <label className='block uppercase tracking-wide text-little_lemon_gray-light text-xs font-bold mb-2' htmlFor="comments">Additional Comments</label> <br></br>
                    <textarea
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        id="comments"
                        rows={8}
                        cols={50}
                        placeholder="Additional Comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></textarea>
                <button className='flex button mx-auto mt-5' type="submit" value="Submit" onSubmit={handleSubmit} aria-label="On Click" >
                Submit
              </button>
            </form>
      </div>
        )
}
