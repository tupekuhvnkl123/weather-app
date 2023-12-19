//// Components
import Degrees from "./Degrees";
import WeatherData from "./WeatherData";
import WeelyWeather from "./WeeklyWeather";
//// Components
import LoadingSpinner from "./LoadingSpinner";

//// Styles
import classes from "../style/Main.module.scss";

const Main = ({
  loading,
  isSuccess,
  weatherData,
  weeklyWeatherData,
  changeWeather,
}) => {
  if (loading) {
    return <LoadingSpinner />;
  }

  const currentWeatherDate = weatherData.date;

  if (isSuccess && !loading) {
    return (
      <main className={classes.main}>
        <Degrees weatherData={weatherData} />
        <WeatherData weatherData={weatherData} />
        <WeelyWeather
          currentWeatherDate={currentWeatherDate}
          timeZone={weatherData.timeZone}
          currentCity={weatherData.city}
          weeklyWeatherData={weeklyWeatherData}
          changeWeather={changeWeather}
        />
      </main>
    );
  } else return <div></div>;
};

export default Main;
