import React from "react";
import { useWeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

function WeatherDetail() {
  const { weatherData } = useWeatherContext();

  return (
    <div className="d-flex flex-row justify-content-between gap-4 ">
      {weatherData?.list.map((weather, index) => (
        <WeatherCard key={index} weather={weather} />
      ))}
    </div>
  );
}

export default WeatherDetail;
