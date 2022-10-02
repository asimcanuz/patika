import "./App.css";
import CitySelect from "./component/CitySelect";
import WeatherDetail from "./component/WeatherDetail";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center container p-4 ">
      <CitySelect />
      <WeatherDetail />
    </div>
  );
}

export default App;
