import { useEffect, useState } from "react";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const appId = process.env.REACT_APP_API_KEY;

export const useWeather = (location) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(`${baseUrl}q=${location}&units=metric&appid=${appId}`)
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, [location]);

  return weather;
};
