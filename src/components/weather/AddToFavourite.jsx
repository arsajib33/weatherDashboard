import addToFavouriteIcon from "../../assets/heart.svg";
import RedHearticon from "../../assets/heart-red.svg";
import { useContext, useEffect, useState } from "react";
import { Favouritecontext,Weathercontext } from "../../context";
export default function AddToFavourite() {

  const {addToFavourite, removeFromFavourite, favourites}=useContext(Favouritecontext)
  const {weatherData}=useContext(Weathercontext)
  const {location,longitude,latitude}=weatherData || {}
  const [isFavourite,toggleFavourite]=useState(false)

  const handlefavouriteToggle=()=>{
    toggleFavourite(!isFavourite)
    const findfav=favourites.find((fav)=>fav.location===location)
    if (!findfav) {
      addToFavourite(
        latitude, longitude, location
      )
    }else{
removeFromFavourite(location)
    }
  }

  useEffect(()=>{
    const check=favourites.find((fav)=>fav.location===location)
  if (check) {
    toggleFavourite(true)
  }
  },[favourites,location])
  
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
        onClick={handlefavouriteToggle}
        className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favourite</span>
          <img src={!isFavourite ?addToFavouriteIcon :RedHearticon} alt="Heart" />
        </button>
      </div>
    </div>
  );
}
