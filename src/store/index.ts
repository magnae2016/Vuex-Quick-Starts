import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { products, State as ProductsState } from './modules/products'

// define typings for the store state
export interface State {
  count: number,
  products: ProductsState
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0
  } as State,
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products
  }
})

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}