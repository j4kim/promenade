<template>
  <div
    class="point"
    :style="{
      left: `${x}%`,
      top: `${y}%`,
    }">
  </div>
</template>

<script>
export default {
  props: ['x', 'y']
}
</script>

<style lang="scss">
.point {
  $point-size: 3vh;
  position: absolute;
  background: white;
  width: $point-size;
  height: $point-size;
  border-radius: $point-size / 2;
  margin-left: -$point-size / 2;
  margin-top: -$point-size / 2;
}
</style>
