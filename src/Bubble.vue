<template>
  <div
    class="bubble"
    :style="{
      left: `${x}%`,
      top: `${y}%`,
    }"
  >
    <div class="point"></div>
    <div class="line"></div>
    <div class="rect">
      Summary here
    </div>
  </div>
</template>

<script>
export default {
  props: ['x', 'y']
}
</script>

<style lang="scss">
.bubble {
  position: absolute;
  .point, .line, .rect {
    position: absolute;
    background: white;
  }
  .point {
    $point-size: 3vh;
    width: $point-size;
    height: $point-size;
    top: -$point-size / 2;
    left: -$point-size / 2;
    border-radius: $point-size / 2;
  }
  .line {
    $line-width: 0.8vh;
    width: 60px;
    height: $line-width;
    top: -$line-width / 2;
  }
  .rect {
    $width: min(140px, 40vw);
    $height: min(180px, 40vh);
    width: $width;
    height: $height;
    bottom: -60px;
    left: 60px;
    border-radius: 16px;
    box-sizing: border-box;
    padding: 16px;
  }
}
</style>
