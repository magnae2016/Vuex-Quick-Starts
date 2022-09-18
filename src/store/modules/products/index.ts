import { Module } from "vuex";
import { State as RootState } from "../../index";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export interface State {
  all: number[],
  count: number
}

// initial state
const state:State = {
  all: [1, 2, 3],
    count: 0
}

export const products:Module<State, RootState> = {
  state,
  getters,
  mutations,
  actions
} 