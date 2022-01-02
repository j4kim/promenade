<template>
  <div id="app">
    <div class="dragscroll">
      <promenade/>
    </div>
    <footer>
      footer here
    </footer>
  </div>
</template>

<script>
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
  .dragscroll {
    overflow-x: scroll;
  }
}
</style>
