import { State } from ".";

export default {
  categories(state: State) {
    return [...new Set(state.allProducts.map((value) => value.category))];
  },
  findProductByCategory: (state: State) => (category: string) => {
    return state.allProducts.filter((value) => value.category === category);
  },
};
