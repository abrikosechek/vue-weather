<template>
  <div class="container--glass">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.container--glass {
  display: block;
  width: 100%;
  margin-top: 2px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 12px;
}
</style>
