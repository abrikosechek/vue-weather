<template>
  <header class="header">
    <div class="header__logo">
      <img class="header__logo--icon" src="@/assets/media/Weathery.png" />
      <p class="header__logo--text">Weathery</p>
    </div>

    <a class="header__link" href="https://github.com/abrikosechek/vue-weather">
      <IconGithubWhite />
    </a>
  </header>
</template>

<script setup>
import { IconGithubWhite } from "@/assets/icons";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;

  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;

    &--icon {
      width: 32px;
      height: 32px;
    }
    &--text {
      font-weight: 600;
    }
  }

  &__link {
    height: 28px;
    width: 28px;

    & > * {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
