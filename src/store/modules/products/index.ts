import { Module } from "vuex";
import { State as RootState } from "../../index";

export interface State {
  all: number[],
  count: number
}

export const products:Module<State, RootState> = {
  state: {
    all: [1, 2, 3],
    count: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
} 