import { Favouritecontext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvidor = ({ children }) => {
  const [favourites, setFavourite] = useLocalStorage("favourite", []);
  console.log(favourites)
  const addToFavourite = (latitude, longitude, location) => {
    setFavourite([...favourites, { latitude, longitude, location }]);
    console.log(location)
  };

  const removeFromFavourite = (location) => {
    // const restFavourites = favourites.filter(
    //   (fav) => fav.location !== location
    // );

    const rest=favourites.filter((fav)=>fav.location!==location)
    setFavourite(rest);
  };
  return (
    <Favouritecontext.Provider
      value={{ addToFavourite, removeFromFavourite, favourites }}
    >
      {children}
    </Favouritecontext.Provider>
  );
};

export default FavouriteProvidor;
