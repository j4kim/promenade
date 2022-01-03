<template>
  <main
    :style="{ width: `${width}px` }"
    @click.self="openBubbleId = null"
  >
    <bubble
      v-for="point in points"
      :key="point.item.id"
      :item="point.item"
      :x="point.x / sections"
      :y="point.y"
      @open="openBubble"
    >
    </bubble>
  </main>
</template>

<script>
import animateScrollTo from 'animated-scroll-to'
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
    openBubbleId: null
  }),

  computed: {
    items() {
      return this.$store.state.posts
    },
    points() {
      return this.items.map((item, i) => {
        let len = this.positions.length
        let slice = Math.floor(i / len)
        let position = this.positions[i % len]
        return {
          x: position[0] + (slice * 100),
          y: position[1],
          item
        }
      })
    },
    sections() {
      // if there is 4 positions available, and 6 items, we'll have 1.5 sections
      // the +1 is a margin
      return (this.items.length + 1) / this.positions.length
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
    openBubble(id, left) {
      if (id === this.openBubbleId) return
      animateScrollTo([left, 0], {
        elementToScroll: this.$parent.$refs.scrollable,
        minDuration: 400
      })
      this.openBubbleId = id
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
