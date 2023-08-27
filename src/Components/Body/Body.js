import React from 'react'
import {useState, useEffect} from "react";
import { CLOUDINARY_IMG_ID } from "../Constants";

const Body = () => {

  const [searchText, setSearchText] = useState("");
  const [listOfRestuarants, setListOfRestuaraants] = useState();
  const [filteredRListOfRestuarants, setFilteredListOfRestuarants] = useState();

  useEffect(()=> {
    getRestuarants();
  }, [])

  const filterRestuarants = (searchText, listOfRestuarants) => {
    const lowerData = searchText.toLowerCase();
    const data = listOfRestuarants.filter((restuarants)=> restuarants?.info?.name?.toLowerCase().includes(lowerData));

    return data;
  }


  async function getRestuarants(){
    try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const Json = await data.json();
      console.log(Json);
      
      setListOfRestuaraants(Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredListOfRestuarants(Json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(listOfRestuarants)
  
    }
    catch(err) {
      console.log(err);
    }

  }

  const RestuarantCard = ({cloudinaryImageId, name, avgRating, cuisines, areaName }) => {

    return (
      <div className="md:w-74 md:h-72  ">
        <div className=" p-3">
        <img className="md:w-60 md:h-40 sm:h-40 sm:w-40 rounded-lg shadow-lime-950 shadow-xl" src={CLOUDINARY_IMG_ID + cloudinaryImageId} alt="Source Img"/>
       
        <h2 className="font-bold">{name}</h2>
        <h2> {avgRating}</h2>
        <h2 className="overflow-hidden truncate sm:w-auto lg:w-56 "> {cuisines?.join(",")}</h2>
        <h2> {areaName}</h2>

        </div>
      </div>
    )
  }

  if(!listOfRestuarants) return null;

  



  if (listOfRestuarants.length === 0)
  {
    return <>No data</>
  }
  else{
    return (

    <div>
      <div className="  flex flex-row md:mx-96 mx-10 my-8 items-center">
      {/* <div> */}
      <input className="h-10 w-4/5  pl-5  rounded-l-full  border-2 border-gray-950  " type="text" placeholder='search for Restaurants' value={searchText} 
       onChange={(e) => setSearchText(e.target.value)} />
      
      <button  className="h-10 w-1/5 border-y-2 border-r-2 lg:m-y-14 border-gray-950 rounded-r-full bg-lime-500" onClick={
        () => {
          setFilteredListOfRestuarants(filterRestuarants(searchText, listOfRestuarants))

        }
      }>Search </button>
      </div>
      
      <div className= "md:flex md:flex-wrap sm:place-content-center mx-10 sm:grid-cols-2  justify-between  md:mx-40">
        {
          filteredRListOfRestuarants.map((restuarants) => {
            return(
              <RestuarantCard {...restuarants?.info} />
            )
          })
        }
      </div>
    </div>

      
    )
  }

}

  

  

  

export default Body