<template>
  <div
    class="bubble"
    :style="{ left: `${x}%`, }"
  >
    <div class="point-n-line" :style="{ top: `${y}%` }">
      <div class="point"></div>
      <div class="line"></div>
    </div>
    <div
      class="rect"
      :class="opened ? 'opened' : ''"
      @click="opened = !opened"
      :style="isDown ?
        { bottom: opened ? '4vh' : `calc(${100-y}% - 60px)` } :
        { top: opened ? '4vh' : `calc(${y}% - 60px)` }
      "
    >
      <div v-if="!opened" class="summary">
        Summary here
      </div>
      <div v-else class="content">
        Content here
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['x', 'y'],

  data: () => ({
    opened: false
  }),

  computed: {
    isDown() {
      return this.y > 50
    }
  }
}
</script>

<style lang="scss">
.bubble {
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: min(90vw, 400px);
  .point, .line, .rect {
    position: absolute;
    background: white;
    border-radius: 16px;
  }
  .point-n-line {
    position: absolute;
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
  }
  .rect {
    $width: min(140px, 40vw);
    $height: min(180px, 40vh);
    width: $width;
    height: $height;
    left: 50px;
    box-sizing: border-box;
    padding: 16px;
    transition: width .3s, height .4s, bottom .4s, top .4s;
    &.opened {
      $width: min(400px, 92vw);
      $height: min(600px, 92vh);
      width: $width;
      height: $height;
    }
    &:hover {
      outline: 1px solid white;
    }
  }
}
</style>
