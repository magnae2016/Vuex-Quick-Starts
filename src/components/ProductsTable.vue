<template>
  <v-card class="rounded-0">
    <v-toolbar color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Products</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tab v-for="item in categories" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-window v-model="tab">
      <v-window-item v-for="item in categories" :key="item" :value="item">
        <v-card flat>
          <v-table density="compact">
            <thead>
              <tr>
                <th class="text-left">title</th>
                <th class="text-left">description</th>
                <th class="text-left">price</th>
                <th class="text-left">discountPercentage</th>
                <th class="text-left">rating</th>
                <th class="text-left">stock</th>
                <th class="text-left">brand</th>
                <th class="text-left">category</th>
                <th class="text-left">thumbnail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in productItems" :key="product.id">
                <td>{{ product.title }}</td>
                <td>{{ product.description }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.discountPercentage }}</td>
                <td>{{ product.rating }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.brand }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.thumbnail }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent, ref
} from "vue";
import { useStore } from "../store";
import { Product } from "../types/products";

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch("products/getAllProducts");

    const categories = computed(() => store.getters["products/categories"]);
    const tab = ref(categories.value[0] || "smartphones");
    const productItems: ComputedRef<Product[]> = computed(() =>
      store.getters["products/findProductByCategory"](tab.value)
    );

    return { tab, categories, productItems };
  },
});
</script>

<style scoped></style>