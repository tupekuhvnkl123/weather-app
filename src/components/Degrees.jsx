//// Styles
import classes from "../style/Degrees.module.scss";

const Degrees = ({ weatherData }) => {
  const degrees = Math.round(weatherData.degrees);

  return (
    <div className={classes.degreesContainer}>
      <span>{`${degrees}°`}</span>
      <h3>{weatherData.description}</h3>
    </div>
  );
};

export default Degrees;
