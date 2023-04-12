
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/BookingPage" element={<BookingPage/>} className="BookingPage">
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
