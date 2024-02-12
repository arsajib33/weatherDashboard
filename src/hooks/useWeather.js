import { useState } from "react";

export default function useWeather() {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temparature: "",
    maxTemparature: "",
    minTemparature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
}
