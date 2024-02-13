import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import pinIcon from "../../assets/pin.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import { Weathercontext } from "../../context";
import { getFormatedDate } from "../../utils/date-utils";
export default function WeatherHeadLine() {
  const { weatherData } = useContext(Weathercontext);
  const { time, temparature, climate } = weatherData;

  function getClimateIcon(climate) {
    switch (climate) {
      case "Rain":
        return RainIcon;
        break;
      case "Clouds":
        return CloudIcon;
        break;
      case "Clear":
        return SunnyIcon;
        break;
      case "Thunder":
        return ThunderIcon;
        break;
      case "Fog":
        return HazeIcon;
        break;
      case "Haze":
        return HazeIcon;
        break;
      case "Mist":
        return HazeIcon;
        break;

      default:
        return SunnyIcon;
        break;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getClimateIcon(climate)} alt="cloud" /> <span>{climate}</span>
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temparature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinIcon} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{weatherData?.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormatedDate(time, "time", false)} -{" "}
        {getFormatedDate(time, "date", false)}
      </p>
    </div>
  );
}
