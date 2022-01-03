import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let username = process.env.VUE_APP_API_USERNAME
let password = process.env.VUE_APP_API_PASSWORD

let headers = new Headers({
  Authorization: 'Basic ' + btoa(`${username}:${password}`)
})

function api(uri){
  let base = 'https://shop.estellezamme.com/wp-json'
  let url = `${base}/${uri}`
  return fetch(url, { headers }).then(r => r.json())
}

export default new Vuex.Store({
  state: {
    posts: [],
    products: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setProducts(state, products) {
      state.products = products
    },
  },
  actions: {
    fetchData({ commit }) {
      api('wp/v2/posts?_embed')
        .then(posts => commit('setPosts', posts))
      api('wc/v3/products')
        .then(products => commit('setProducts', products))
    }
  }
})
