import React from 'react';
import ItemList from "./ItemList";

const RestuarantCategory = ( { data }) => {
  
  return (
    <div>
    <div className="w-1/2 mx-auto my-4 shadow-lg bg-gray-200 rounded-md p-4 ">

        <div className="flex justify-between">

        <span className= "font-bold ">{data?.title} ({data.itemCards.length})</span>
        <span>{"⬇️"}</span>

        </div>

        
            <ItemList  items= {data?.itemCards}/>
        
    </div>

        

       


    </div>
  )
}

export default RestuarantCategory