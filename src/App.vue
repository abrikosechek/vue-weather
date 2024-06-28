<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-wrapper__content">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
</script>

<style lang="scss">
body {
  position: relative;
  width: 100%;
  margin: 0;
  background: linear-gradient(#2c63aa 30%, #479ad1), #2c63aa;
  background-attachment: fixed;
  font-family: "Open Sans", sans-serif, Arial, Helvetica;
  color: white;
}

.page-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 420px;
  min-height: 100dvh;
  margin: 0 auto;
  overflow: hidden;

  &__content {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
</style>
