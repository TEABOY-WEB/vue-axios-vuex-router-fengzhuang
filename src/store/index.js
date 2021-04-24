import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules/index.js'
import * as Types from '@/store/action-types'
console.log(modules)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //这里保存所有的公共状态；
    tokens: []
  },
  mutations: {
    [Types.SET_TOKEN](state, payload) {
      state.tokens = [...state.tokens, payload]
    },
    [Types.CLEAR_TOKEN](state) {
      state.tokens.forEach(token => token())
      state.tokens = [];
    }
  },
  actions: {
    // [Types.CLEAR_TOKEN](context) {
    //   context.state.tokens.forEach(token => token())
    //   context.commit(Types.CLEAR_TOKEN)
    // }
  },
  modules: {
    ...modules
  }
})
