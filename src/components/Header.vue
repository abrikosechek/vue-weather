<template>
  <header class="header">
    <div class="header__logo">
      <img class="header__logo--icon" src="@/assets/media/Weathery.png" />
      <p class="header__logo--text">Weathery</p>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
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
}
</style>
