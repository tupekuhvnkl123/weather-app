export const weatherDataStracture = (res, timezone, city, country) => {
  const weatherData = {
    degrees: res.temp.day,
    description: res.weather[0].main,
    date: res.dt,
    timeZone: timezone,
    city,
    country,
    humidity: res.humidity,
    wind: res.wind_speed,
    summary: res.summary,
    icon: res.weather[0].icon,
  };

  return weatherData;
};

export const weeklyWeatherDataStracture = (res) => {
  const weeklyData = res.slice(0, 7).map((obj) => {
    return {
      degrees: obj.temp.day,
      date: obj.dt,
      icon: obj.weather[0].icon,
    };
  });

  return weeklyData;
};
