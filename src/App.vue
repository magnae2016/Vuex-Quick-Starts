<template>
  <v-app>
    <v-main> <ProductsTable></ProductsTable> </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsTable from "../src/components/ProductsTable.vue";

export default defineComponent({
  name: "App",

  components: { ProductsTable },

  data() {
    return {
      //
    };
  },
});
</script>
