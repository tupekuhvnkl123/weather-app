const useWeatherDate = (date, timeZone) => {
  const options = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  const time = new Date((date + timeZone) * 1000).toLocaleString(
    "en-IN",
    options
  );

  const weatherDate = {
    day: time.split(",")[0],
    date: time.split(",")[1],
  };

  return { weatherDate };
};

export default useWeatherDate;
