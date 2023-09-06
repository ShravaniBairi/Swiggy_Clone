import { CLOUDINARY_IMG_ID } from "./Constants";

const ItemList = ({items}) => {
    console.log(items);

    
    return(
        <div>
           { 
           items.map((item) => (
            <div className = " flex justify-between p-2 m-2 border-b-4 border-gray-600 ">
                <div className=" py-2 w-9/12 text-left ">
                    <h1 >{item?.card?.info?.isVeg ? "🟢" : "🔴"}</h1>
                    <h1 className= "font-bold">{item?.card?.info?.name}</h1>
                    <h1>Rs. {item?.card?.info?.price / 100}</h1>
                    <p className= " text-xs ">{item?.card?.info?.description}</p>
        
                </div>
                <div className= "w-2/12 text-right">
                    <img className= "  h-32 w-32 rounded-md " src = {CLOUDINARY_IMG_ID + item?.card?.info?.imageId} alt="imageTag" />
                </div>

            </div>


           ))
           }
        

        
        </div>
        
    )
}

export default ItemList