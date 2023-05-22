import React from "react";
import { useWeatherContext } from "../context/WeatherContext";

function CitySelect() {
  const { countryList, selectedLocation, updateSelectLocation } =
    useWeatherContext();

  const cityHandleChange = ({ target }) => {
    updateSelectLocation(Number(target.value));
  };
  return (
    <select className={"form-select mb-4"} value={selectedLocation.id} onChange={(e) => cityHandleChange(e)}>
      {countryList.length > 0 &&
        countryList.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
    </select>
  );
}

export default CitySelect;
