<template>
  <main
    :style="{ width: `${width}px` }"
    @click.self="openedBubbleId = null"
  >
    <bubble
      v-for="point in points"
      :key="point.toString()"
      :id="point.toString()"
      :x="point[0]/sections"
      :y="point[1]"
      @open="openBubble"
    >
    </bubble>
  </main>
</template>

<script>
import Bubble from './Bubble'

export default {
  components: { Bubble },

  data: () => ({
    appHeight: undefined, // will be redefined in resize method
    ratio: 3, // map image has a ratio of 3/1, this is fixed
    positions: [
      [23, 61],
      [45, 77],
      [63, 41.5],
      [85, 59],
    ],
    items: 5,
    openedBubbleId: null
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
    },
    width() {
      return this.appHeight * this.ratio * this.sections
    }
  },

  mounted() {
    this.resize()
    window.onresize = this.resize
  },

  methods: {
    resize() {
      this.appHeight = window.innerHeight
      document.documentElement.style.setProperty('--app-height', `${this.appHeight}px`)
    },
    openBubble(id, left, behavior = 'smooth') {
      if (id === this.openedBubbleId) return
      this.$parent.$refs.scrollable.scrollTo({ left, behavior })
      this.openedBubbleId = id
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
}
</style>
