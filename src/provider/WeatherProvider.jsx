import { Weathercontext } from "../context";
import { useWeather } from "../hooks";
const WeatherProvider=({children})=>{
const {weatherData,loading,error}=useWeather()
    return(
        <Weathercontext.Provider
        value={{weatherData,loading,error}}
        >
{children}
        </Weathercontext.Provider>
    )
}
export default WeatherProvider