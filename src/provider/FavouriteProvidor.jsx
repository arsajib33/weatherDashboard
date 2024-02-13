import { Favouritecontext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvidor = ({ children }) => {
  const [favourites, setFavourite] = useLocalStorage("favourite", []);
  const addToFavourite = (latitude, longitude, location) => {
    setFavourite(...Favourites, { latitude, longitude, location });
  };

  const removeFromFavourite = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourite(restFavourites);
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
