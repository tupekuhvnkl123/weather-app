//// Shared
import useWeatherDate from "../shared/hooks/useWeatherDate";

//// Styles
import classes from "../style/WeeklyWeatherCard.module.scss";

const WeeklyWeatherCard = ({
  itemData,
  timeZone,
  currentWeatherDate,
  index,
  currentCity,
  changeWeather,
}) => {
  const degrees = Math.round(itemData.degrees);
  const { weatherDate } = useWeatherDate(itemData.date, timeZone);
  const chosenWeatherDate = useWeatherDate(currentWeatherDate, timeZone);
  const iconUrl = `http://openweathermap.org/img/wn/${itemData.icon}@2x.png`;

  const currentWeather =
    weatherDate.date === chosenWeatherDate.weatherDate.date;

  const itemClickHandler = () => {
    changeWeather({ city: currentCity, weatherIndex: index });
  };

  return (
    <li
      onClick={itemClickHandler}
      className={`${classes.weatherItem} ${
        currentWeather ? classes.chosen : ""
      }`}
    >
      <h3 className={classes.day}>{weatherDate.day}</h3>
      <p className={classes.date}>{weatherDate.date}</p>
      <div className={classes.icon_degrees}>
        <div
          className={classes.icon}
          style={{
            backgroundImage: `url(${iconUrl})`,
          }}
        ></div>
        <hr className={classes.separateLine} />
        <h3>{`${degrees}°`}</h3>
      </div>
    </li>
  );
};

export default WeeklyWeatherCard;
