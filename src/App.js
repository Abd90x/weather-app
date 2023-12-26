import "./App.css";
import { useWeather } from "./service/useWeather";
import { useState } from "react";
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaWind } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { TbMapPinSearch } from "react-icons/tb";
import { FaLocationCrosshairs } from "react-icons/fa6";

import FeelsLike from "./assets/icons/feels.svg";

function App() {
  const [location, setLocation] = useState("");

  const getWeather = useWeather(location);

  const [weather, setWeather] = useState({});

  const handleClick = () => {
    setWeather(getWeather);
    document.title = `Weather in ${location} 🌡️`;
  };

  return (
    <div className="app">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter City or Town.."
          required
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" onClick={handleClick}>
          <TbMapPinSearch />
          Search
        </button>
      </div>
      {weather.hasOwnProperty("weather") ? (
        <>
          <div className="weather-box">
            <div className="main-weather">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="icon"
              />
              <div className="main-temp">
                <p className="city">
                  <FaLocationCrosshairs />
                  {weather.name}, {weather.sys.country}
                </p>

                <h1>
                  {weather.main.temp.toFixed(1)}
                  <sup>
                    <TbTemperatureCelsius fontSize="25px" />
                  </sup>
                </h1>
                <p className="weather-status">{weather.weather[0].main}</p>
              </div>
            </div>

            <div className="weather-data">
              <div>
                Max <IoIosArrowUp />
                {weather.main.temp_max}
                <sup>
                  <TbTemperatureCelsius />
                </sup>
              </div>
              <div>
                {" "}
                Min <IoIosArrowDown />
                {weather.main.temp_min}
                <sup>
                  <TbTemperatureCelsius />
                </sup>
              </div>
              <div>
                <img
                  className="feels-like-img"
                  src={FeelsLike}
                  alt="Feels Like icon"
                />
                {weather.main.feels_like}
                <sup>
                  <TbTemperatureCelsius />
                </sup>
              </div>
              <div>
                {" "}
                <FaWind />
                {weather.wind.speed}
                <sup>km/h</sup>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p style={{ margin: "20px" }}>Please Enter a Country, City, Town...</p>
      )}
    </div>
  );
}

export default App;
