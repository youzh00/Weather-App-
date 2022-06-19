import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = createContext();

// const ApiStructure =
//   "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f5d4275eb44e1c4e0f2685d54978fc6c";

const Key2 = "f5d4275eb44e1c4e0f2685d54978fc6c";

export function DataContextProvider({ children }) {
  const navigate = useNavigate();
  const [isDay, setIsDay] = useState("yes");
  const [weatherData, setWeatherData] = useState({
    sunset: 0,
    sunrise: 0,
    icon: " ",
    description: "",
    temp: 0,
    windSpeed: 0,
    humidity: 0,
    success: true,
  });

  const getWeather = async (city) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key2}`
    );
    const reponse = await data.json();
    if (reponse.cod === "404") {
      console.log("city not found");
      navigate("/error");
    } else {
      setWeatherData((prv) => {
        return {
          ...prv,
          sunset: reponse.sys.sunset,
          sunrise: reponse.sys.sunrise,
          icon: reponse.weather[0].icon,
          description: reponse.weather[0].description,
          temp: reponse.main.temp - 273.15,
          windSpeed: reponse.wind.speed * 3.6,
          humidity: reponse.main.humidity,
        };
      });
      if (new Date().valueOf() / 1000 < reponse.sys.sunset) {
        console.log("Day Time");
        setIsDay("yes");
      } else {
        console.log("Night Time");
        setIsDay("no");
      }
    }
  };

  return (
    <DataContext.Provider
      value={{
        getWeather,
        isDay,
        weatherData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
