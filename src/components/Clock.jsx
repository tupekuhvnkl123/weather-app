import React from "react";
//// Styles
import classes from "../style/Clock.module.scss";

//// Shared
import { isDayFn } from "../shared/constants/isDayFn";

const Clock = () => {
  const fullTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const time = fullTime.split(" ")[0];
  const ampm = fullTime.split(" ")[1].toLowerCase();
  const hoursDialRotate =
    new Date()
      .toLocaleTimeString("en-US", {
        hour: "numeric",
      })
      .split(" ")[0] * 30;

  const minutesDialRotate =
    new Date()
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })
      .split(" ")[0]
      .split(":")[1] * 6;

  const isDay = isDayFn();

  return (
    <div className={classes.clockContainer}>
      <div className={`${classes.clock} ${!isDay ? classes.nightClock : ""}`}>
        <div
          className={classes.minuteDial}
          style={{ transform: `rotate(${minutesDialRotate}deg)` }}
        />
        <div
          className={classes.hourDial}
          style={{ transform: `rotate(${hoursDialRotate}deg)` }}
        />
        <div className={`${classes.twelveLine} ${classes.line}`} />
        <div className={`${classes.threeLine} ${classes.line}`} />
        <div className={`${classes.sixLine} ${classes.line}`} />
        <div className={`${classes.nineLine} ${classes.line}`} />
      </div>

      <div className={`${classes.time} ${!isDay ? classes.nightTime : ""}`}>
        <h3 className={classes.number}>{time}</h3>
        <p className={classes.am_pm}>{ampm}</p>
      </div>
    </div>
  );
};

export default Clock;
