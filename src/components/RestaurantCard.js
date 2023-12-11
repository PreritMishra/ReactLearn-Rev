import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    //(props) => {resName,cuisines}(Destructuring of Object)
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo } = props.resData.info;

    return (
        <div className="m-5 p-5 w-[250px] rounded-lg bg-gray-100 hover:bg-slate-300">
            <img 
            className="rounded-lg"
            alt="logo" src= { CDN_URL
            + cloudinaryImageId
            }/>
            <h2 className= "font-bold py-4 text-lg">{name}</h2>
            <h4>Cuisines: {cuisines.join(", ")}</h4>
            <h4>Avg Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    )
}

export default RestaurantCard;