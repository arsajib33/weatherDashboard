import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadLine from "./WeatherHeadLine";
import { useContext } from "react";
import { Weathercontext } from "../../context";
export default function WeatherBoard() {

  const {weatherData,loading}=useContext(Weathercontext)
  return (
    <div className="container mt-16">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          {loading.state?<p>{loading.message}</p>:(
<>
<AddToFavourite />
          <WeatherHeadLine />
          <WeatherCondition />
</>
          )}
         
        </div>
      </div>
    </div>
  );
}
