import axios from "axios";
import { apiKey } from "../constants";

const forecastEnpoint = (params) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

const locationEnpoint = (params) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const respone = await axios.request(options);
    return respone.data;
  } catch (error) {
    console.log("Error: ", error);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEnpoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationEnpoint(params));
};
