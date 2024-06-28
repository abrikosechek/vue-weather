<template>
  <Swiper
    class="SwiperComponent"
    :modules="swiperModules"
    :pagination="{ clickable: true }"
    :slides-per-view="1"
    :space-between="0"
  >
    <SwiperSlide
      v-for="(city, index) in weatherStore.citiesWeather.value"
      :key="index"
    >
      <WeatherWidget :weather="city" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useWeatherStore } from "@/store/weather";
import WeatherWidget from "@/widgets/Weather.vue";

const swiperModules = [Pagination];

const weatherStore = useWeatherStore();
weatherStore.getAllWeather();
</script>

<style scoped lang="scss">
.SwiperComponent {
  height: 100%;
}
</style>
