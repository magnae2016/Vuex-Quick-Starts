import { Module } from "vuex";
import { Product } from "../../../types/products";
import { State as RootState } from "../../index";
import * as actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export interface State {
  all: number[];
  count: number;
  allProducts: Product[]
}

// initial state
const state: State = {
  all: [1, 2, 3],
  count: 0,
  allProducts: []
};

export const products:Module<State, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
} 