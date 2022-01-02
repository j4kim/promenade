<template>
  <div id="app"
    :style="{
      width: `${width}px`
    }"
  >
    <div
      class="point"
      v-for="pos in positions"
      :key="pos.toString()"
      :style="{
        left: `${pos[0]}%`,
        top: `${pos[1]}%`,
      }"
    >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    width: 3000,
    positions: [
      [23, 61],
      [45, 77],
    ]
  }),
  mounted() {
    this.resize()
    window.onresize = this.resize
  },
  methods: {
    resize() {
      this.width = this.$el.offsetHeight * 3
    }
  }
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}
#app {
  height: 100vh;
  max-height: -webkit-fill-available;
  min-height: auto;
  background-image: url(assets/promenade.svg);
  position: relative;
}
.point {
  $point-size: 3vh;
  position: absolute;
  background: rgb(223, 163, 195);
  width: $point-size;
  height: $point-size;
  border-radius: $point-size / 2;
  margin-left: -$point-size / 2;
  margin-top: -$point-size / 2;
}
</style>
