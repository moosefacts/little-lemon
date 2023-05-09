
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./components/Main";
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import './App.css';
import MenuPage from './pages/MenuPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/BookingPage" element={<BookingPage/>} className="BookingPage" />
        <Route path="/Confirmation" element={<ConfirmedBooking/>} className="confirmedBooking" />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/order" />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
