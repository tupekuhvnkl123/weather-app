import "./App.css";
//// Conponents
import Header from "./components/Header";
import Main from "./components/Main";

//// Shared
import { isDayFn } from "./shared/constants/isDayFn";
import useWeather from "./shared/hooks/useWeather";

function App() {
  const {
    changeWeather,
    weatherData,
    weeklyWeatherData,
    error,
    loading,
    isSuccess,
  } = useWeather();

  const isDay = isDayFn();

  return (
    <div
      className="appContainer"
      style={{
        backgroundImage: `url("images/${isDay ? "day" : "night"}.jpg")`,
      }}
    >
      <Header changeWeather={changeWeather} />
      <Main
        weatherData={weatherData}
        weeklyWeatherData={weeklyWeatherData}
        loading={loading}
        isSuccess={isSuccess}
        changeWeather={changeWeather}
      />
    </div>
  );
}

export default App;
