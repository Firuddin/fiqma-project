import React from 'react'
import { IoIosBasket } from "react-icons/io";

const Header = () => {
  return (
    <>
    <header>
      <navbar>
        <div className='container max-w-[1200px] mx-auto py-6 flex justify-between'>
        <div className='logo'>
          <img src="./Delizioso.png" alt="" />
        </div>
        <div className='links'>
          <ul className='flex gap-10'>
            <li>Home</li>
            <li>Menu</li>
            <li>About us</li>
            <li>Order online</li>
            <li>Reservation</li>
            <li>Contaact us</li>
          </ul>
        </div>
        <div className='login'>
          <div><IoIosBasket /></div>
          <div></div>
        </div>
        </div>
      </navbar>
    </header>
    </>
  )
}

export default Header