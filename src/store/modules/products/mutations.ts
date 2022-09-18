import { State } from "."

export default {
  increment(state: State) {
    state.count += 100
  }
}