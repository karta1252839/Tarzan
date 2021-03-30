// import { createStore } from 'vuex'
import Vue from 'vue'
import Vuex, {createNamespacedHelpers} from 'vuex'

Vue.use(Vuex)

export default createStore({
  // vuex 的資料
  state: {
    cart: []
  },
  // 修改 vuex 資料的 function
  mutations: {
    addCart(state, data) {
      console.log(data)
      state.cart.push(data)
    },
    delCart(state, index) {
      state.cart.splice(index, 1)
    }
  },
  // 修改 vuex 資料的 function 可以用 async
  // 但是需要呼叫 mutations 裡的 function 修改
  actions: {
  },
  // 取得 vuex 資料的 function
  getters: {
    cart(state) {
      return state.cart
    }
  },
  // 把 vuex 的資料分割
  modules: {
  },
  plugins:[createPersistedState()]
})
