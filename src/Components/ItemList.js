import { CLOUDINARY_IMG_ID } from "./Constants";

const ItemList = ({items}) => {
    

    
    return(
        <div >
           { 
           items.map((item) => (
            <div key={item.card.info.id} className = " flex justify-between p-2 m-4 border-b-2 border-gray-600 ">
                <div className=" py-2 w-9/12 text-left ">
                    <h1 >{item?.card?.info?.isVeg ? "🟢" : "🔴"}</h1>
                    <h1 className= "font-bold">{item?.card?.info?.name}</h1>
                    <h1 className="font-semibold">₹ {item?.card?.info?.price / 100}</h1>
                    <p className= " text-xs ">{item?.card?.info?.description}</p>
        
                </div>
                
                    
                <div className= "w-2/12 text-right">
                <div className="absolute ">
                        <button className= " bg-white font-semibold text-black px-2 py-1 mx-5 mt-20 w-3/4 rounded-lg "> Add + </button>
                    </div>
                    <img className= " w-28 h-24 rounded-md " src = {CLOUDINARY_IMG_ID + item?.card?.info?.imageId} alt="imageTag" />
                    
                </div>
                

            </div>


           ))
           }
        

        
        </div>
        
    )
}

export default ItemList