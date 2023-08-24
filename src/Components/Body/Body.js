import React from 'react'
import {useState, useEffect} from "react";
import { CLOUDINARY_IMG_ID } from "../Constants";

const Body = () => {

  const [listOfRestuarants, setListOfRestuaraants] = useState();

  useEffect(()=> {
    getRestuarants();
  }, [])


  async function getRestuarants(){
    try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const Json = await data.json();
      console.log(Json);
      
      setListOfRestuaraants(Json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(listOfRestuarants)
  
    }
    catch(err) {
      console.log(err);
    }

  }

  const RestuarantCard = ({cloudinaryImageId, aggregatedDiscountInfoV3, name, avgRating, cuisines, areaName }) => {
    return (
      <div className="w-74 h-72">
        <div className=" p-3">
        <img className="w-60 h-40 rounded-lg shadow-inner" src={CLOUDINARY_IMG_ID + cloudinaryImageId} alt="Source Img"/>
        {/* <h2> {aggregatedDiscountInfoV3.discountTag + aggregatedDiscountInfoV3.header } </h2> */}
        <h2 className="font-bold"> {name}</h2>
        <h2> {avgRating}</h2>
        <h2 className="overflow-hidden truncate lg:w-56 "> {cuisines?.join(",")}</h2>
        <h2> {areaName}</h2>

        </div>
        


        
      </div>
    )
  }

  if(!listOfRestuarants) return null;


  if (listOfRestuarants.length === 0 && listOfRestuarants === 0 )
  {
    return <>No data</>
    
  }
  else{
    return (
      <div className= "flex flex-wrap justify-between mx-40">

        {
          listOfRestuarants.map((restuarants) => {
            return(
              <RestuarantCard {...restuarants?.info} />
            )
          })
        }
      </div>
    )
  }

}

  

  

  

export default Body