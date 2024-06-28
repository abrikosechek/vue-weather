<template>
  <div class="weather">
    <h1 class="weather--city">{{ weather.name }}</h1>

    <!-- Main -->
    <section class="weather__main">
      <img
        class="weather__main--icon"
        :src="`https://openweathermap.org/img/wn/${weather.current.icon}@2x.png`"
      />

      <div class="weather__main__about">
        <p class="weather__main__about--degrees">{{ weather.current.temp }}°</p>
        <p class="weather__main__about--description">
          {{ weather.current.description }}
        </p>
      </div>
    </section>

    <section class="weather__details">
      <!-- Hourly -->
      <ContainerGlass>
        <div class="weather__details__container">
          <p class="weather__details__container--name">Hourly</p>
          <hr class="weather__details__container--splitter" />
          <div class="hourly--slider">
            <div
              v-for="item in weather.forecast"
              :key="item"
              class="hourly--slider__item"
            >
              <p class="hourly--slider__item--time">
                {{ item.hours }}
                <br />
                <span>{{ item.day }}</span>
              </p>
              <img
                class="hourly--slider__item--icon"
                :src="`https://openweathermap.org/img/wn/${item.icon}@2x.png`"
              />
              <p class="hourly--slider__item--degrees">{{ item.temp }}</p>
            </div>
          </div>
        </div>
      </ContainerGlass>

      <div class="widgets">
        <!-- Visibility -->
        <ContainerGlass>
          <div class="weather__details__container">
            <p class="weather__details__container--name">Visibility</p>
            <hr class="weather__details__container--splitter" />
            <p class="visibility">
              {{ weather.current.visibility }} <span>km</span>
            </p>
            <p class="visibility-description">
              {{
                weather.current.visibility >= 5
                  ? "It's okay"
                  : "It's not okay :("
              }}
            </p>
          </div>
        </ContainerGlass>
        <!-- Wind -->
        <ContainerGlass>
          <div class="weather__details__container">
            <p class="weather__details__container--name">Wind</p>
            <hr class="weather__details__container--splitter" />
            <div class="wind">
              <div class="wind__item">
                <p class="wind__item--value">
                  {{ weather.current.wind?.speed }}
                </p>
                <div class="wind__item__description">
                  <p class="wind__item__description--units">m/s</p>
                  <p class="wind__item__description__name">speed</p>
                </div>
              </div>
              <div class="wind__item">
                <p class="wind__item--value">
                  {{
                    weather.current.wind?.gust || weather.current.wind?.speed
                  }}
                </p>
                <div class="wind__item__description">
                  <p class="wind__item__description--units">m/s</p>
                  <p class="wind__item__description--name">gust</p>
                </div>
              </div>
            </div>
          </div>
        </ContainerGlass>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import ContainerGlass from "@/components/ContainerGlass.vue";
defineProps(["weather"]);
</script>

<style scoped lang="scss">
.weather {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;

  &--city {
    text-align: center;
    font-size: 26px;
    font-weight: 500;
  }

  &__main {
    display: flex;
    gap: 8px;
    margin-top: 18px;

    &--icon {
      width: 90px;
      height: 90px;
    }

    &__about {
      &--degrees {
        font-size: 56px;
        line-height: 1em;
      }

      &--description {
        opacity: 0.8;
      }
    }
  }

  &__details {
    width: 100%;
    margin-top: 36px;

    & > *:not(:first-child) {
      margin-top: 8px;
    }

    &__container {
      padding: 12px 0;

      & > * {
        padding: 0 12px;
      }

      &--name {
        width: 100%;
        font-size: 14px;
      }

      &--splitter {
        width: 100%;
        margin: 8px 0;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
        border: 0;
        font-size: 14px;
      }
    }
  }
}

.widgets {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  width: 100%;
  min-height: 100%;
}

.hourly--slider {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  overflow: auto;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--time {
      margin-bottom: 6px;
      font-size: 12px;
      font-weight: 500;
      text-wrap: nowrap;
      text-align: center;
      line-height: 1em;

      & > span {
        font-size: 10px;
        font-weight: 600;
        opacity: 0.8;
      }
    }

    &--icon {
      width: 28px;
    }

    &--degrees {
      position: relative;
      flex: 0 0 auto;
      text-align: center;
      text-wrap: nowrap;
      font-size: 18px;

      &::after {
        content: "°";
        position: absolute;
      }
    }
  }
}

.visibility {
  font-size: 32px;

  & > span {
    font-size: 24px;
  }

  &-description {
    margin-top: 6px;
    opacity: 0.8;
    font-size: 16px;
  }
}

.wind {
  width: 100%;

  &__item {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 4px 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    &--value {
      font-size: 32px;
      line-height: 1em;
    }

    &__description {
      &--units {
        font-size: 12px;
        line-height: 1em;
        opacity: 0.8;
      }
      &--name {
        font-size: 16px;
        line-height: 1em;
      }
    }
  }
}
</style>
