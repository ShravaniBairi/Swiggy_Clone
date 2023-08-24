import React from 'react'
import SearchIcon from '../assets/SearchIcon.png'
import HelpIcon from '../assets/HelpIcon.png'
import OffersIcon from '../assets/OffersIcon.png';
import UserIcon from '../assets/UserIcon.png';
import CartIcon from '../assets/CartIcon.png';

export const NavBarTop = () => {
  return (
    <div>
        <div className='md:flex md:space-x-1 md:mt-10 md:mx-1 mr-3 md:mb-10 md:flex-wrap hidden sm:block'>
           <div className="flex font-bold text-md p-1 h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={SearchIcon} alt="SearchIcon" /> </span>Search</div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={OffersIcon} alt="SearchIcon" /> </span>Offers</div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={HelpIcon} alt="SearchIcon" /> </span>Help</div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-6 h-5 pt-1 pr-1"src={UserIcon} alt="SearchIcon" /> </span>Sign In</div>
           <div className="flex font-bold text-md p-1  h-auto"><span><img className="w-5 h-5 pt-1 pr-1"src={CartIcon} alt="SearchIcon" /> </span>Cart</div>
        </div>
       
    </div>
  )
}

export const NavBarBottom = () => {
    return(
        <div>
             <div className=' flex space-x-1 mx-4 flex-wrap justify-between md:hidden lg:hidden'>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={SearchIcon} alt="SearchIcon" />Search</div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={OffersIcon} alt="SearchIcon" />Offers</div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={HelpIcon} alt="SearchIcon" />Help</div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1"src={UserIcon} alt="SearchIcon" />Sign In</div>
           <div className="block font-bold text-md p-1 w-16 h-auto"><img className="w-6 h-5 mx-2 p-1 rounded-full"src={CartIcon} alt="SearchIcon" />Cart</div>
        </div>
        </div>
    )
}

