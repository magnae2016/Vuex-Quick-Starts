import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define typings for the store state
interface State {
  count: number
}

// define injection key
const key:InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
