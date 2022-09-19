import { State } from "."
import { Product } from "../../../types/products"
import { SET_ALL_PRODUCTS } from "./mutation-types"

export default {
  increment(state: State) {
    state.count += 100
  },
  [SET_ALL_PRODUCTS](state: State, payload: Product[]) {
    state.allProducts = payload
  }
}