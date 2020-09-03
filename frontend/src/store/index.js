import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async fetchUsers() {
      return (await axios.get('/api/users')).data
    },
  },
  modules: {},
})
