<template>
  <div id="app">
    <div class="dragscroll">
      <promenade/>
    </div>
  </div>
</template>

<script>
import 'dragscroll'
import Promenade from './Promenade'

export default {
  components: { Promenade }
}
</script>

<style lang="scss">
body, html {
  margin: 0;
  padding: 0;
}
#app {
  height: 100vh;
  max-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  .dragscroll {
    overflow-x: scroll;
    height: 100%;
    cursor: grab;
    &:active{
      cursor: grabbing;
    }
  }
}
</style>
