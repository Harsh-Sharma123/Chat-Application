import React from 'react';

export const Login = () => {
  return (
    <>
      <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Lama Chat</span>
          <span className='title'>Login</span>
          <form action="">
           
            <input type="email" name="" id="" placeholder='Email' />
            <input type="password" name="" id="" placeholder='Password'/>
           
            <button>Sign In</button>
          </form>
          <p>You don't have an account? Register</p>
        </div>
      </div>
    </>
  )
}
