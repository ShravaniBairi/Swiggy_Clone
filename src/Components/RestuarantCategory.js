import React, {useState} from 'react';
import ItemList from "./ItemList";

const RestuarantCategory = ( { data }) => {

  const [showItems, setShowItems] = useState(true)

  const handleClick = () => {
    setShowItems(!showItems)
  }
  
  return (
    <div>
    <div className="w-1/2 mx-auto my-4 shadow-lg rounded-md bg-slate-200 p-4 ">

   

        <div className="flex justify-between cursor-pointer rounded-lg p-3  " onClick={handleClick}>

        <span className= "font-bold ">{data?.title} ({data.itemCards.length})</span>
        <span>{showItems?"▲":"▼"}</span>

        </div>

        
            { showItems && < ItemList  items= {data?.itemCards}/>}

      </div>
    </div>
  )
}

export default RestuarantCategory