
import Shimmer from "./Shimmer";
// import { CLOUDINARY_IMG_ID, RESTUARANT_MENU_API } from "./Constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory"


const RestuarantMenu = () => {

   
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    

  

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>

            {
                categories.map((category) =>  ( <RestuarantCategory key={category.card.card.title} data = {category.card?.card} /> ))
            }

        </div>
    )
    
}

export default RestuarantMenu;