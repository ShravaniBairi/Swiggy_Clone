import React from 'react'
import SearchIcon from '../assets/SearchIcon.png'
import HelpIcon from '../assets/HelpIcon.png'
import OffersIcon from '../assets/OffersIcon.png';
import UserIcon from '../assets/UserIcon.png';
import CartIcon from '../assets/CartIcon.png';
import {Link} from "react-router-dom";

export const NavBarTop = () => {
  return (
    <div>
        <div className='lg:flex lg:space-x-1 lg:mt-10 lg:mx-1 mr-3 lg:mb-10 lg:flex-wrap md:hidden hidden '>
           <div className="flex font-bold text-md p-1 h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={SearchIcon} alt="SearchIcon" /> </span><Link to = "/">Search</Link></div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={OffersIcon} alt="SearchIcon" /> </span>Offers</div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={HelpIcon} alt="SearchIcon" /> </span><Link to="/Help">Help</Link></div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-6 h-5 pt-1 pr-1"src={UserIcon} alt="SearchIcon" /> </span>Sign In</div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={CartIcon} alt="SearchIcon" /> </span>Cart</div>
        </div>
       
    </div>
  )
}

export const NavBarBottom = () => {
    return(
        <div>
             <div className=' flex space-x-1 mx-4 flex-wrap justify-between  lg:hidden'>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={SearchIcon} alt="SearchIcon" /><Link to = "/">Search</Link></div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={OffersIcon} alt="SearchIcon" />Offers</div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={HelpIcon} alt="SearchIcon" /><Link to="/Help">Help</Link></div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={UserIcon} alt="SearchIcon" />Sign In</div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1 rounded-full"src={CartIcon} alt="SearchIcon" />Cart</div>
        </div>
        </div>
    )
}

