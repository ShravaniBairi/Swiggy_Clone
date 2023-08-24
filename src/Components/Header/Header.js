import React from 'react'
import FoodStoreLogo from "../../assets/FoodStoreLogo.jpg"
import {NavBarTop} from "../NavBar"


const Header = () => {
  return (
    <div className='flex h-28  w-screen shadow-2xl flex-wrap justify-between lg:px-24'>
        <div className='flex md:space-x-1 space-x-2'>
            <img className="w-20 h-auto shadow-md m-5 rounded-full" src={FoodStoreLogo} alt="FoodStoreLogo"  /> 
            <input className="w-50 h-auto shadow-md p-2 mt-9 mb-9" type="search" placeholder='Select your Location ' />
        </div>
        <NavBarTop />
        
    </div>
  )
}

export default Header