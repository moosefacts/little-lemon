import React from 'react'
import Navigation from './nav/Navigation.jsx';
import Footer from './footer/Footer.jsx';

export default function Layout({ children}) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}


