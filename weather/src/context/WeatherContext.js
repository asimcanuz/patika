import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import getCityList from "../api/getCityList";

const WeatherContext = createContext();
const api = {
  key: process.env.REACT_APP_API_KEY,
  count: 7,
};
const WeatherProvider = ({ children }) => {
  const [countryList, setCountryList] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    "id": 738647,
    "name": "Trabzon",
    "state": "",
    "country": "TR",
    "coord": {
      "lon": 39.833328,
      "lat": 40.916672
    }
  });
  const [weatherData, setWeatherData] = useState();
  const updateSelectLocation = (id) => {
    const selectedCity = countryList.find((city) => city.id === id);
    setSelectedLocation(selectedCity);
  };

  const getWeatherDetail = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${api.count}&units=metric&lang=tr&appid=${api.key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  };
  useLayoutEffect(() => {
    getCityList()
      .then((data) => {
        setCountryList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useLayoutEffect(() => {
    if (selectedLocation !== undefined) {
      getWeatherDetail(
        selectedLocation.coord.lon,
        selectedLocation.coord.lat
      ).then((data) => setWeatherData(data));
    }
  }, [selectedLocation]);

  return (
    <WeatherContext.Provider
      value={{
        countryList,
        selectedLocation,
        updateSelectLocation,
        weatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
export default WeatherProvider;
