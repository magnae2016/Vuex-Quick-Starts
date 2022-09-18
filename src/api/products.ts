import { AxiosPromise } from "axios"
import { ProductsResponse } from "../types/products"
import { dummyjson } from "./instance"

const api = {
  allProducts: "/products"
}

export function fetchAllProducts():AxiosPromise<ProductsResponse> {
  return dummyjson.get(api.allProducts)
}