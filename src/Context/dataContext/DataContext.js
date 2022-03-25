import React, { createContext, useState } from "react";

export const DataContext = createContext();

const API =
  "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=f5d4275eb44e1c4e0f2685d54978fc6c";

const key = "d724cda68c856a754decbec531b904c5";

export function DataContextProvider({ children }) {
  const key2 = "cc2ee984298825bbf478a71f73670aba";
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isDay, setIsDay] = useState("yes");
  const [location, setLocation] = useState({
    country: "",
    city: "",
    localTime: "",
  });
  const [sys, setSys] = useState("");
  const [weatherData, setWeatherData] = useState({
    sunset: 0,
    sunrise: 0,
    icon: " ",
    description: "",
    temp: 0,
    windSpeed: 0,
    humidity: 0,
  });

  const getWeather1 = async (city) => {
    const data = await fetch(
      `http://api.weatherstack.com/current?access_key=${key2}&query=${city}`
    );
    const reponse = await data.json();
    setData1(reponse);
    setLocation((prv) => {
      return {
        ...prv,
        country: reponse.location.country,
        city: reponse.location.name,
        localTime: reponse.location.localtime,
      };
    });
    setIsDay(reponse.current.is_day);
    console.log(reponse);
  };

  const apiKey = "f5d4275eb44e1c4e0f2685d54978fc6c";
  const getWeather2 = async (city) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const reponse = await data.json();
    setData2(reponse);
    setSys(reponse.sys);
    console.log(reponse);
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
  };

  return (
    <DataContext.Provider
      value={{
        getWeather1,
        getWeather2,
        data1,
        data2,
        isDay,
        location,
        sys,
        weatherData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export default DataContext;
