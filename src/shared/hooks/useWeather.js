//// Packages
import { useEffect } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

//// Shared
import {
  weatherDataStracture,
  weeklyWeatherDataStracture,
} from "../constants/weather-data-starcture";

const useWeather = () => {
  const coordinateApi = (city) =>
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
      import.meta.env.VITE_APP_API_KEY
    }`;
  const fetchCoordinate = async (city) =>
    (await axios.get(coordinateApi(city))).data;

  const cityCoordinate = useMutation({
    mutationKey: ["cityCoordinate"],
    mutationFn: (city) => fetchCoordinate(city),
  });

  const weatherApi = (coordinate) =>
    `https://api.openweathermap.org/data/3.0/onecall?lat=${
      coordinate.lat
    }&lon=${coordinate.lon}&units=metric&appid=${
      import.meta.env.VITE_APP_API_KEY
    }`;
  const fetchWeather = async (coordinate) =>
    (await axios.get(weatherApi(coordinate))).data;

  const weatherDataQueryFn = async ({ city, weatherIndex }) => {
    let weatherDataObj = {};
    try {
      const coordinateRes = await cityCoordinate.mutateAsync(city);
      const lat = coordinateRes[0].lat;
      const lon = coordinateRes[0].lon;
      const cityName = coordinateRes[0].name;
      const country = coordinateRes[0].country;
      const coordinate = { lat, lon };
      const weatherDataRes = await fetchWeather(coordinate);
      const currentWeather = weatherDataStracture(
        weatherDataRes.daily[weatherIndex || 0],
        weatherDataRes.timezone_offset,
        cityName,
        country
      );
      const weeklyWeather = weeklyWeatherDataStracture(weatherDataRes.daily);
      weatherDataObj = {
        current: currentWeather,
        weekly: weeklyWeather,
      };
    } catch {}
    return weatherDataObj;
  };

  const weatherData = useMutation({
    mutationKey: ["weatherData"],
    mutationFn: (params) => weatherDataQueryFn(params),
  });

  useEffect(() => {
    weatherData.mutate({ city: "Jerusalem" });
  }, []);

  const returendObj = {
    weatherData: weatherData.data ? weatherData.data.current : {},
    weeklyWeatherData: weatherData.data ? weatherData.data.weekly : {},
    changeWeather: weatherData.mutate,
    error: weatherData.error,
    loading: weatherData.isPending,
    isSuccess: weatherData.isSuccess,
  };

  return returendObj;
};

export default useWeather;
