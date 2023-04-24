
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import BookingPage from "./components/booking/BookingPage";
import AboutPage from "./components/about/AboutPage";
import ConfirmedBooking from "./components/booking/ConfirmedBooking";
import './App.css';
import Menu from './components/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/BookingPage" element={<BookingPage/>} className="BookingPage" />
        <Route path="/Confirmation" element={<ConfirmedBooking/>} className="confirmedBooking" />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/order" />
        <Route path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
