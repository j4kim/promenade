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
      ref="rect"
      :class="isOpen ? 'isopen' : ''"
      @click="open"
      :style="isDown ?
        { bottom: isOpen ? '4vh' : `calc(${100-y}% - 50px)` } :
        { top: isOpen ? '4vh' : `calc(${y}% - 50px)` }
      "
    >
      <div v-if="!isOpen" class="summary">
        Summary here
      </div>
      <div v-else class="content">
        Content here
        <button @click.stop="isOpen = false">close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'x', 'y'],

  data: () => ({
    isOpen: false
  }),

  computed: {
    isDown() {
      return this.y > 50
    }
  },

  methods: {
    open() {
      this.isOpen = true
      let offsetLeft = this.$el.offsetLeft + 50
      let windowWidth = window.innerWidth
      // /!\ keep same values as in scss .rect.isopen width
      let rectWidth = Math.min(400, 0.92 * windowWidth)
      let margin = windowWidth - rectWidth
      let left = offsetLeft - margin/2
      document.querySelector('.dragscroll').scrollTo({
        left, behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
.bubble {
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
    cursor: pointer;
    $width: min(120px, 40vw);
    $height: min(140px, 40vh);
    width: $width;
    height: $height;
    left: 50px;
    box-sizing: border-box;
    padding: 16px;
    transition: width .3s, height .4s, bottom .4s, top .4s;
    &.isopen {
      $width: min(400px, 92vw);
      $height: min(600px, 92%);
      width: $width;
      height: $height;
      z-index: 1;
    }
  }
}
</style>
