//// Components
import WeeklyWeatherCard from "./WeeklyWeatherCard";

//// Styles
import classes from "../style/WeelyWeather.module.scss";

const WeelyWeather = ({
  weeklyWeatherData,
  timeZone,
  currentWeatherDate,
  currentCity,
  changeWeather,
}) => {
  return (
    <div className={classes.weelyWeatherContainer}>
      <hr className={classes.separateLine} />
      <ul className={classes.weeklyWeatherList}>
        {weeklyWeatherData.map((itemData, index) => (
          <WeeklyWeatherCard
            key={index}
            index={index}
            itemData={itemData}
            timeZone={timeZone}
            currentWeatherDate={currentWeatherDate}
            currentCity={currentCity}
            changeWeather={changeWeather}
          />
        ))}
      </ul>
    </div>
  );
};

export default WeelyWeather;
