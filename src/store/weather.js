import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { timestampToDate } from "@/utils/formatDate";
import axios from "@/plugins/axios";

export const useWeatherStore = defineStore("weather", () => {
  // states
  const cities = ref([
    {
      name: "Moscow",
      timeOffset: 3,
      loaded: false,
      current: {},
      forecast: [],
    },
    {
      name: "London",
      timeOffset: -1,
      loaded: false,
      current: {},
      forecast: [],
    },
    {
      name: "New York",
      timeOffset: -4,
      loaded: false,
      current: {},
      forecast: [],
    },
  ]);

  // getters
  const citiesWeather = computed(() => cities);

  // actions
  async function getCityWeather(city) {
    const weatherState = cities.value.find((i) => i.name == city);
    if (!weatherState) {
      console.log("getCityWeather() Error: No such city");
      return;
    }

    const [current, forecast] = await Promise.all([
      axios.get(
        `/data/2.5/weather?q=${city}&units=metric&appid=${process.env.VUE_APP_WEATHER_API_KEY}`
      ),
      axios.get(
        `/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.VUE_APP_WEATHER_API_KEY}`
      ),
    ]);

    weatherState.current = {
      description: current.data.weather[0].description,
      icon: current.data.weather[0].icon,
      temp: Math.round(current.data.main.temp),
      visibility: Math.round(current.data.visibility / 1000),
      wind: {
        speed: Math.ceil(current.data.wind.speed),
        gust: Math.ceil(current.data.wind.gust),
      },
    };
    const slicedForecast = forecast.data.list.slice(0, 16);
    weatherState.forecast = slicedForecast.map((item) => ({
      icon: item.weather[0].icon,
      hours: timestampToDate(item.dt, "h a", weatherState.timeOffset),
      day: timestampToDate(item.dt, "dd.MM", weatherState.timeOffset),
      temp: Math.round(item.main.temp_max),
    }));
  }

  function getAllWeather() {
    cities.value.forEach((element) => {
      getCityWeather(element.name);
    });
  }

  return { citiesWeather, getCityWeather, getAllWeather };
});
