import { CLOUDINARY_IMG_ID } from "./Constants";

const RestuarantCard = ({cloudinaryImageId, name, avgRating, cuisines, areaName }) => {

    return (
      <div className="lg:w-60 lg:h-72   w-44  flex flex-wrap shadow-sm justify-between">
        <div className=" p-3">
        <img className=" lg:w-60 lg:h-40 xl:w-60 xl:h-40 2xl:w-60 2xl:h-40 md:h-40 md:w-40 h-36 w-36 mb-4 rounded-lg shadow-lime-950 shadow-lg" src={CLOUDINARY_IMG_ID + cloudinaryImageId} alt="Source Img"/>
       
        <h2 className="font-bold overflow-hidden w-40 truncate lg:w-56 sm:w-44 ">{name}</h2>
        <h2> {avgRating}</h2>
        <h2 className="overflow-hidden truncate w-40 sm:w-44 lg:w-56 "> {cuisines?.join(",")}</h2>
        <h2> {areaName}</h2>

        </div>
      </div>
    )
  }


  export default RestuarantCard;


