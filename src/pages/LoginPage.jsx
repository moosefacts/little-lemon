import React from 'react'
import Footer from '../components/Footer';
import { signIn, signOut, useSession } from "next-auth/react";

function LoginPage (props) {
  const session = useSession();
  


  return (
    <div>
      <h1> Welcome Back </h1>
        <button onClick={signIn} className='bg-little_lemon_yellow px-5'>Sign In</button>
          <div>{session}</div>
      <Footer />
    </div>
  )
}

export default LoginPage
