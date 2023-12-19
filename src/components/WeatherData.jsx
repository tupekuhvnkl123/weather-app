//// Shared
import useWeatherDate from "../shared/hooks/useWeatherDate";
//// Styles
import classes from "../style/WeatherData.module.scss";

const WeatherData = ({ weatherData }) => {
  const { weatherDate } = useWeatherDate(
    weatherData.date,
    weatherData.timeZone
  );

  return (
    <div className={classes.weatherDataContainer}>
      <div className={classes.day_date_city}>
        <div className={classes.day_date}>
          <p>{weatherDate.day}</p>
          <p>{weatherDate.date}</p>
        </div>
        <div className={classes.city}>
          <h2>{`${weatherData.city} , ${weatherData.country}`}</h2>
        </div>
      </div>
      <div className={classes.details}>
        <p>{`Humidity : ${weatherData.humidity}%`}</p>
        <p>{`Wind : ${weatherData.wind} mph`}</p>
      </div>
      <div className={classes.summary}>
        <p>{`Summary : ${weatherData.summary}`}</p>
      </div>
    </div>
  );
};

export default WeatherData;
