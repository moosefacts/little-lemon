import { SessionProvider } from "next-auth/react"
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "../components/Main";
import BookingPage from "../components/booking/BookingPage";
import AboutPage from "../components/about/AboutPage";
import LoginPage from "../components/LoginPage";
import ConfirmedBooking from "../components/booking/ConfirmedBooking";
import Menu from '../components/Menu';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={pageProps.session}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/BookingPage" element={<BookingPage/>} className="BookingPage" />
        <Route path="/Confirmation" element={<ConfirmedBooking/>} className="confirmedBooking" />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/order" />
        <Route path="/login" element={<LoginPage />}/>
      </Routes>
    </BrowserRouter>
      <Component {...pageProps} />
    </SessionProvider>
  )
}