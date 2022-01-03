<template>
  <main :style="{ width: `${width}px` }">
    <div
      class="point"
      v-for="point in points"
      :key="point.toString()"
      :style="{
        left: `${point[0]/sections}%`,
        top: `${point[1]}%`,
      }"
    >
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    width: 3000,
    positions: [
      [23, 61],
      [45, 77],
      [63, 41.5],
      [85, 59],
    ],
    items: 5
  }),

  computed: {
    points() {
      return [...Array(this.items)].map((_, i) => {
        let len = this.positions.length
        let slice = Math.floor(i / len)
        let position = this.positions[i % len]
        return [
          position[0] + (slice * 100),
          position[1]
        ]
      })
    },
    sections() {
      // if there is 4 positions available, and 6 items, we'll have 1.5 sections
      // the +1 is a margin
      return (this.items + 1) / this.positions.length
    }
  },

  mounted() {
    this.resize()
    window.onresize = this.resize
  },

  methods: {
    resize() {
      // map image has a ratio of 3/1, this is fixed
      let fullMapWidth = this.$el.offsetHeight * 3
      this.width = fullMapWidth * this.sections
    }
  }
}
</script>

<style lang="scss">
main {
  background-image: url(assets/promenade.svg);
  background-repeat: repeat-x;
  background-size: auto 100%;
  height: 100%;
  position: relative;
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
}
</style>
