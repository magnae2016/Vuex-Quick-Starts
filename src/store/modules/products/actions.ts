import { Commit } from "vuex";
import { fetchAllProducts } from "../../../api/products";
import { SET_ALL_PRODUCTS } from "./mutation-types";

export const getAllProducts = async ({
  commit,
}: {
  commit: Commit;
}) => {
  const { data } = await fetchAllProducts();
  commit(SET_ALL_PRODUCTS, data.products)
};
