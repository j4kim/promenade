import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    fetchData({ commit }) {
      fetch('https://shop.estellezamme.com/wp-json/wp/v2/posts?_embed')
        .then(r => r.json())
        .then(posts => commit('setPosts', posts))
    }
  }
})
