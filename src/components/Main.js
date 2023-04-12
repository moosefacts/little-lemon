import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';


import BookingPage from './BookingPage';


const Main = () => {

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/BookingPage" element={<BookingPage/> }></Route>
            </Routes>

        </BrowserRouter>
    )

}
export default Main;