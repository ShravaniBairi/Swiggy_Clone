import React from 'react'
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer"

import {filterRestuarants} from "../utils/Helper"
import RestuarantCard from "./RestuarantCard"

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [listOfRestuarants, setListOfRestuaraants] = useState();
  const [filteredListOfRestuarants, setFilteredListOfRestuarants] = useState();

  useEffect(()=> {
    getRestuarants();
  }, [])

  async function getRestuarants(){
    try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const Json = await data.json();
      console.log(Json);
      if(Json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      {
        setListOfRestuaraants(Json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredListOfRestuarants(Json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(listOfRestuarants)

      }
      else{
        setListOfRestuaraants(Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredListOfRestuarants(Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(listOfRestuarants)
      }
  
    }
    catch(err) {
      console.log(err);
    }

  }

  

  


  if(!listOfRestuarants) return null;

  if(listOfRestuarants?.length === 0)
    return <Shimmer />

  if(filteredListOfRestuarants?.length === 0)
      return <h1>No Restuarant Matches with the text entered by you....keep trying</h1>
  return (listOfRestuarants?.length === 0) ? <Shimmer /> : (
    <div>
      <div className=" sm:grid-cols-2 md:flex md:flex-row md:mx-96 mx-10 my-8 items-center ">
      {/* <div> */}
      <input className="h-10 w-4/5  pl-5  rounded-l-full  border-2 border-gray-950  " type="text" placeholder='search for Restaurants' value={searchText} 
       onChange={(e) => setSearchText(e.target.value)} />
      
      <button  className="h-10 w-1/5 border-y-2 border-r-2 lg:m-y-14 border-gray-950 rounded-r-full bg-lime-500" onClick={
        () => {
          setFilteredListOfRestuarants(filterRestuarants(searchText, listOfRestuarants))
        }
      }>Search </button>
      </div>
      
      <div className= "flex flex-wrap place-content-center  mx-2 md:mx-10  grid-cols-2  lg:mx-40">
        {
          filteredListOfRestuarants.map((restuarants) => {
            return(
              <RestuarantCard {...restuarants?.info} />
            )
          })
        }
      </div>
    </div>

      
    )
  }

 

export default Body