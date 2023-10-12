import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Lama chat</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
        <span>John</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
